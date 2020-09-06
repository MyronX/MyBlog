---
title: JDBC入门学习
date: 2020-04-19
tags:
 - JDBC
categories:
 - 数据库
 - 学习笔记
---

## JDBC

### 一、基础知识

1、什么是JDBC

java database connectivity  java 数据库连接 即用java 语言操作数据库

JDBC的本质是可以用一套java代码来同时操作所有不同类型的数据库，是一个统一的java规范

**JDBC：定义了一套操作所有关系类型数据库的规则（接口），让不同的数据库去实现各自的实现类来完成自己数据库的效用，开发者只需要调用不同的实现类就好了(利用接口来实现一个方法的调用)**

------

### 二、快速入门

修改本地sample数据库中的person表的age

```java	
//1、注册驱动
Class.forName("com.mysql.jdbc.Driver");
//2、获取到连接的对象  也就是连接到你本地的数据sample数据库
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/sample","username","password");
 //3、定义sql语句
String sql = "update person set age = 15 where id = 1";
//4、获取到状态
Statement statement = conn.createStatement();
//5、获取到更新的结果的返回值
int count = statement.executeUpdate(sql);
//6、释放资源
statement.close();
conn.close();
```

到这里 就完成了一个简单的入门，可以在数据库中看到自己的表格中id位1的人年龄已经被更改为15，一个简易的demo 完成

------

### 三、常见对象解释

#### 1、DriverManager对象

​		概述：驱动管理对象，用于管理一组JDBC驱动程序的基本服务

​		一、常见功能

​			（1）注册驱动：告诉程序底层对应的数据库类型

```java
//注册驱动程序 DriverManager
static void registerDriver(Driver driver) 
//代码使用    
Class.forName("com.mysql.jdbc.Driver");

//实际上Class.forName 就是调用的注册驱动程序完成注册，实际上
```



​			（2）获取数据库的连接

```java
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/sample","username","password");
//第一个参数是指定连接数据库的路径，其中前面的写法固定，必须是jdbc：mysql：//ip:port/数据库名称
//第二第三个参数为对应的用户名和面密码
```



#### 2、Connection对象

​		概述：数据库连接对象

​		一、常见功能

​			（1） 获取到一个执行sql的对象

```JAVA
Statement statement = conn.createStatement();
PreparedStatement preparedstatement = conn.PreparedStatement(String sql);
```

​			（2）管理事务

​					开启事务

​					提交事务

​					回滚事务

#### 3、Statement对象

​		概述：执行sql的对象，用于执行静态SQL语句并返回其生成结果的对象

​		一、常用函数

```java
//了解即可 用于执行任意sql
boolean execute(String sql);
//较为常用的函数
//执行DML（insert、update、delete）语句 和DDL（creat、alter、drop）语句
//返回值int 是表中受影响的行数的个数，一般可以通过返回值来判断修改了几条信息，从而判断是否修改成功
//要注意 执行ddl语句是没有返回值的 返回值位0
int executeUpdate(String sql);
//执行的是DQL（select）语句 返回的是一个结果对象集合
ResultSet executeQuery(String sql);
```



#### 4、ResultSet

​		概述：结果集对象，查询结果保存在该对象中

​		一、常用方法

```java
//(1) 游标向下移动一行 到达末尾返回false
boolean next();
//（2）获取数据  
//xxx代表的是数据类型 如 int boolean long string 等等
//parm 有两种 int 和string
//传入的是int 代表的是第几列的数据，表示列的位置
//传入的是String  代表的是获取列名为parm 的参数
getxxx(parm);
```



#### 5、PreparedStatement对象

​		概述：statement的接口，也是执行sql的对象 

​		首先要介绍一下sql注入问题 :直接拼接字符串来编译成静态SQL语句会造成特殊字符的错误处理，导致查询的结果出现错误

​		采用这个类可以防止sql注入

​		preparedStatement 采用的是预编译的sql语句，利用占位符**？**来 作为带传入的参数，方法如下

```java
String sql = "select * from user where username = ? and password = ?"
PreparedStatement preparedStatement = Connect.prepareStatement(String sql);
/**采用get 方法给占位符赋值
*方法 setXXX(parm1，parm2)
*其中XXX代表的是传入的数据类型，例如 int string 等等
*parm1 是指第几个占位符，parm2是要传入的参数，位置从1开始
*/
setString(1,"admin");
setString(2,"123465");
//这样就完成了一个参数的注入，然后执行语句
//注意这里因为在创建state的时候已经将sql传入，所以不需要再次注入sql语句，直接执行即可
resultSet = preparedStatement.executeQuery();
```

ps：大部分情况下都会使用这个类而不是statement类，因为它可以有效的解决一些sql安全性上的问题，并且效率会更高一点。

------

### 四、JDBC控制事务

1、什么是事务？

事务就是指一个包含多个步骤的业务操作，如果这个业务操作被事务管理，最后的结果就是所有步骤同时成功，或者同时失败

2、事务的操作

事务的操作一共有三种，**使用Connection对象来管理事务**，对应的事务及方法如下

（1）开启事务：setAutoCommit(boolean autoCommit) ：将参数设置位false，开启事务

（2）提交事务：commit();

（3）回滚事务：rollback();

实例代码如下

```java
package day01;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * 事务管理 银行转账
 */
public class JDBCDeno10 {

    public static void main(String[] args) {
        Connection connection = null;
        PreparedStatement preparedStatement1 = null;
        PreparedStatement preparedStatement2 = null;
        ResultSet resultSet = null;


        //连接
        try {
            connection = JDBCUtils.getConnection();
            //开启事务
            connection.setAutoCommit(false);
            //定义sql
            String sql1 = "update account set balance = balance - ? where id = ?";
            String sql2 = "update account set balance = balance + ? where id = ?";

            preparedStatement1 = connection.prepareStatement(sql1);
            preparedStatement2 = connection.prepareStatement(sql2);

            preparedStatement1.setInt(1,500);
            preparedStatement1.setInt(2,1);

            preparedStatement2.setInt(1,500);
            preparedStatement2.setInt(2,2);

            preparedStatement1.executeUpdate();
            preparedStatement2.executeUpdate();
            
            //没有异常 提交事务
            connection.commit();


        } catch (Exception e) {
            //如果有异常，则执行回滚
            if (connection != null ) {
                try {
                    connection.rollback();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            e.printStackTrace();
        }finally {

            if (preparedStatement2 != null) {
                try {
                    preparedStatement2.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            JDBCUtils.close(resultSet,preparedStatement1,connection);

        }
    }
}

```

------

### 五、数据库连接池

由于前面的学习中，每一次使用数据库都要向系统申请资源，这样会造成系统资源的浪费，并且会使的效率低下，所以采用连接池的方式，将对象集中管理，提高效率，降低资源的损耗。

实际上就是一个存放数据库连接的容器，可以看成是一个集合

当用户需要访问数据库的时候，从集合中获取到连接对象，访问完毕之后并不销毁，而是将连接的对象放回集合

好处：节约资源，用户可以搞高效访问

1、如何实现

SQL包下的DataSource 是一个接口，由数据库厂商实现

​	常用方法 ：获取连接  getConnection（）

​						归还连接：如果对象是从连接池中获取的，那么使用connection.close()方法，则不会销毁相连接，											而是归还链接

主要有两个实现技术

1、C3P0：数据库连接池技术

2、Druid：数据库连接池技术，由阿里巴巴提供



C3P0的使用：

1.定义配置文件 ：

​		名称：c3p0.properties 或者 c3p0-config.xml

​		路径：直接放在resource就可以

```xml	
//配置文件示例代码
<c3p0-config>
  <!-- 默认配置文件 -->
  <default-config>
  	<!--  连接参数 -->
    <property name="driverClass">com.mysql.jdbc.Driver</property>
    <property name="jdbcUrl">jdbc:mysql://localhost:3306/person</property>
    <property name="user">username</property>
    <property name="password">password</property>
    
    <!-- 连接池参数 -->
    <!--初始化申请的连接数量 就是存放的容器初始容量  超过5个再去申请-->
    <property name="initialPoolSize">5</property>
    <!--最大的连接数量  最多是允许10个 -->
    <property name="maxPoolSize">10</property>
    <!--超时时间-->
    <property name="checkoutTimeout">9000</property>
  </default-config>
	<!-- 额外的配置文件 -->
  <named-config name="config1"> 
    <!--  连接参数 -->
    <property name="driverClass">com.mysql.jdbc.Driver</property>
    <property name="jdbcUrl">jdbc:mysql://localhost:3306/students</property>
    <property name="user">username</property>
    <property name="password">password</property>
    
    <!-- 连接池参数 -->
    <property name="initialPoolSize">10</property>
    <property name="maxPoolSize">20</property>
    <property name="checkoutTimeout">1000</property>
  </named-config>
</c3p0-config>
```



2.创建核心对象： 数据库连接池对象 ComboPooledDataSource（）

​		函数中参数为空，则使用默认的配置文件，若传入的为配置文件名称，则调用具体的配置文件

3.获取连接：getConnect()



Druid的使用

1.定义配置文件 ：

​		名称：任意名称的peoperties文件

​		路径：直接放在resource就可以，任意位置

​		使用需要手动加载

```properties
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql://127.0.0.1:3306/db3
username=username
password=password
initialSize=5
maxActive=10
maxWait=9000
```



2.获取数据库连接池对象： 通过工厂类来获取

```java
DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
```

3.获取连接对象：getConnection();

```java
Connection connection = dataSource.getConnection();
```



------

### 六、Spring JDBC 

JDBC的简单封装，提供了 JDBC Template 对象来简化开发  

使用

1、JdbcTemplate对象依赖于数据源DataSource，在创建之前要先按照规范创建一个datasource

```java
JdbcTemplate template = new JdbcTemplate(ds);
```

2、常用方法

* update():执行DML语句。增、删、改语句
* queryForMap():查询结果将结果集封装为map集合，将列名作为key，将值作为value 将这条记录封装为一个map集合
   * 注意：这个方法查询的结果集长度只能是1
* queryForList():查询结果将结果集封装为list集合
		* 注意：将每一条记录封装为一个Map集合，再将Map集合装载到List集合中
* query():查询结果，将结果封装为JavaBean对象
   * query的参数：RowMapper
      * 一般我们使用BeanPropertyRowMapper实现类。可以完成数据到JavaBean的自动封装
      * new BeanPropertyRowMapper<类型>(类型.class)
* queryForObject：查询结果，将结果封装为对象
		* 一般用于聚合函数的查询



```java
//针对封装成对象的代码
public void test(){
    String sql = "select * from emp";
    List<Emp> list = template.query(sql, new BeanPropertyRowMapper<Emp>(Emp.class));
    for (Emp emp : list) {
        System.out.println(emp);
    }
}
```







