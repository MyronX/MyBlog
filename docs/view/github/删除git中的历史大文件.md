---
title: 清除.git中的历史脏数据
date: 2020-05-27 
tags:
 - github
categories:
 - github
---



# 清除.git中的历史脏数据

## 前提

最近因为在做一个项目，然后突然重新clone仓库的时候发现仓库的.git文件居然高达70M，然而我实际的代码量却只有700多K，为了清理多余的冗杂数据，开始了下面的清扫计划。



## 原因

其实造成这样的问题很大的原因是因为在没有使用.gitignore之前，重复提交或者修改了一些较大，且非二进制编码的文件，所以会导致文件一致存储在log记录中，从而导致了.git文件中`object->pack`中的文件太大,所以我们要做的就是清除这里的数据，把对较大文件的修改去掉。

```yaml
//.git文件目录结构
HEAD  			// 指向当前分支
branches/   	// 目录
config  		// 项目特有的配置选项
description  	// 仅供 GitWeb 程序使用
hooks/  		// 保存了客户端或服务端钩子脚本
index  			// 保存了暂存区域信息
info/  			// 保存了一份不希望在 .gitignore 文件中管理的忽略模式 (ignored patterns) 的全局可执行文件
objects/  		// 存储所有数据内容
refs/  			// 存储指向数据 (分支) 的提交对象的指针
```

## 解决

### 方法一 重新初始化仓库

简而言之，就是你自己仅仅保留一份有效的代码，删除.git的文件，重新git init，然后push至远端仓库，实际上就是相当于重新开一个新的仓库

## 方法二 清除历史树的脏数据

**在执行这个方法之前，请确保这些大文件的历史修改是不重要的，并且有可能会强制覆盖其他分支上的数据，所以请三思！！！！！**

首先，我们用下面的命令查找出大文件

```shell
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"
```

> rev-list命令用来列出Git仓库中的提交，我们用它来列出所有提交中涉及的文件名及其ID。 该命令可以指定只显示某个引用（或分支）的上下游的提交。 
> --objects：列出该提交涉及的所有文件ID。 
> --all：所有分支的提交，相当于指定了位于/refs下的所有引用。 
> verify-pack命令用于显示已打包的内容，我们用它来找到那些大文件。 
> -v（verbose）参数是打印详细信息。

上述这个步骤可以得到对应的提交的文件id，以及他们的文件名，然后我们执行以下的指令来删除他们,记得把下面命令的**YOU-FILE-NAME**替换为要删除的文件名字

```shell
git filter-branch --force --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch YOU-FILE-NAME' --tag-name-filter cat -- --all
```

>filter-branch命令可以用来重写Git仓库中的提交 
>--index-filter参数用来指定一条Bash命令，然后Git会检出（checkout）所有的提交， 执行该命令，然后重新提交。 
>–all参数表示我们需要重写所有分支（或引用）。 
>YOU-FILE-NAME 你查找出来的大文件名字



重复若干次，直到把所有的大文件都删除后，需要强制推送到远程仓库，才能使更改而航校，不然都是存在本地的仓库

```shell
git push --force --all
```

需要值得注意的是，如果存在多余的分支，要查看其他分支是否修改成功，看其状态是否被修改，unchange即未修改成功，需要切换到对应的分支上重新提交。

最后，我们要利用git的垃圾回收，来清除残留的数据

```shell
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now

```

至此，就算是清理成功了



## 参考文献

[解决github项目体积过大的问题](https://juejin.im/post/5ce5043c518825240245beb7)

[寻找并删除Git记录中的大文件](https://harttle.land/2016/03/22/purge-large-files-in-gitrepo.html)

[生产环境请考虑使用 bfg 等效率工具](https://rtyley.github.io/bfg-repo-cleaner/)