# 外宣网站



npm安装富文本编辑器 这个暂时不需要 属于被抛弃的部分
$ npm install --save "@tinymce/tinymce-vue@^3"

1、package.json 里的依赖版本咱们尽量保持一致, 关于tinymce可以暂时不用下载 只要把public下tinymce文件下载下来就行了
    如果admin界面的tinymce不能用可以先不用管

2、向后端的请求用的是axios,请求格式可以去查看文档，我用的不是太好。文档地址 http://www.axios-js.com/zh-cn/docs/#axios-create-config
    如果遇到跨域问题可以找后端，让他们解决

3、关于接口名字的问题
    我的想法是前后端尽量保持一致，以前端定义后端匹配为主

    举个例子：
    /team/addTeamNotice 这个是添加一篇文章的操作 驼峰式命名
    这里的team是数据里的一个表名 add 为具体操作，Team 为表名， Notice代表一个对象也可以是数据库表的一行（可以参考数据库的定义）
     接下来的命名最好与上述保持一致
    
   

4、云数据库
    {
        ip: 82.157.179.123,
        port:3306,
        user:root,
        password:Aa123456
    }
    可以去直接查看数据的情况

