---
title: Git常用命令
date: 2020-04-27 
tags:
 - github
categories:
 - github
---



# Git常用命令

### 1、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



### 2、查看历史和提交的记录

```shell
git log
//或者可使用以下命令
git reflog
//上面的命令会查看到所提交的详细信息，如果你只想简略的查看，请使用以下命令
git log --pretty=oneline
```



### 3、添加/删除远程仓库

```shell
git remote add <仓库名> <github 仓库地址>

#删除一个远程的仓库
git remote rm <仓库名>

#查看远程仓库
git remote
#查看远程仓库的详细信息
git remote -v
```



### 4、分支相关

```shell
#查看本地分支
git branch

#查看所有分支 包括远程
git branch -a

#新建分支
git branch <分支名>
#切换到对应的分支
git checkout <分支名>

#或者以下一部解决
git checkout -b <分支名>

#将创建好的分支推送到远程仓库
git push <仓库名>  <分支名>
```



### 5、删除分支/tag

```shell
#删除远程分支
git push --delete <仓库名> <分支名>
#删除tag
git push --delete <仓库名> tag <tag name>
```



### 6、获取远程新分支的更改到本地

```shell
git pull <仓库名> <分支名>
```



### 7、推送分支到远程仓库

```shell
git push <仓库名> <分支名>

#如果本地分支和远程分支不一致，要申明分支的对应关系
git push <仓库名> <本地分支名>:<远程分支名>
```



### 8、版本回退

```shell
#首先通过git log 等操作拿到对应的版本id
git reset --hard <版本id>

#回退到上一个版本
git reset --hard HEAD^

#回退多个版本
git reset --hard HEAD~N
```



### 9、获取远程仓库的最新信息

```shell
git fetch <仓库名>
```



### 10、保存当前的工作

```shell
#把当前修改，但还未commit的文件保存
git stash

##查看当前stash
git stash list

#取出修改的数据 第n个数据
git stash apply <stash@{n}>

##用这个命令可以再取出的同时直接删除 总是取出最上的一个
git stash pop
```



### 11、删除远程仓库文件

```shell
#预览要删除的文件 -n不会删除文件
git rm -r -n --cached <文件/文件夹名称>

#删除文件
git rm -r --cached <文件/文件夹名称>
```



### 12、

```shell

```



### 13、

```shell

```



### 14、

```shell

```



### 15、

```shell

```



### 16、

```shell

```



### 17、配置全局用户名和邮箱

 ```shell

 ```



### 18、

```shell

```



### 19、

```shell

```



### 20、

```shell

```



### 21、

```shell

```



### 22、

```shell

```



### 23、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



### 24、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



### 25、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



### 26、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



### 27、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



### 28、配置全局用户名和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```



