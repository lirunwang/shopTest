# shop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# git使用步骤：
# 1、初始化仓库
git init

# 2、查看仓库
git status
# 3、添加本地仓库
git add .
# 4、提交到暂存区
git commit -m "标记内容"
# 5、新建远程仓库
## 在github上创建新仓库
# 6、关联远程仓库
git remote add origin git@github.com:lirunwang/shopTest.git
# 7、推送到远程仓库
git push -u origin master（之后在推送，就直接git push）



#### 开始项目
# 一、登录
1、新建一个分支，专门创建登录功能
2、查看所有分支git branch
3、新建，git checkout -b dev-login
4、新建组件login+配置路由等……
5、git commit -m "新建登录分支,新建登录组件,配置路由"
# 注意:
> commit 每完成一次小功能就提交一次
> push 推送是要在mster上去完成

# 引入el-form

# 样式调整
>height:100%
>  注意: div#app的height:100%;,它是根组件,继承性

## 封装自己的Vue插件,实质是把不是vue插件变成vue的用法使用
<!-- 例如axios -->
<!-- 创建一个插件模块 -->
<!-- 然后引入axios,将axios封装成vue的使用语法,然后到处导出模块 -->
import axios from 'axios'

// MyPlugin一看是个对象
// 所以我们自定义一个对象
const MyHttpSever={}
// MyPlugin.install = function (Vue, options) {
    MyHttpSever.install=(Vue)=>{

    // 4. 添加实例方法
    Vue.prototype.$http = axios
  }
  export default MyHttpSever


  ### 实现数据的时候 ####
  1 -给button绑定一个事件@click.prevent=handleLogin(),此时可以拿到数据
  2 -定义方法methods:{
      handleLogin(){
          <!-- //发送请求 -->
          this.$http.post('url',数据)
          .then((res)=>{
              <!-- 接口数据对象解构赋值,实现需求 -->
                const {data,meta:{msg,status}}=res.data
          })
      }
  }

  # 实现登录提示消息弹出
  <!-- elementui为我们提供好的一个方法 -->
  this.$message.warning(msg);


  # 二. 跳转home组件
  1- 在login组件的请求中用js编程时导航寻找home组件
      **  this.$router.push({name:'home'})  **实现跳转
  2- 在组件中创建home组件
  3- 配置路由router => "导入","配置"
  4- 由于都展示在app.vue跟组件中,所以视图定义不用管
    App.vue => <router-view />


# 简化异步操作代码async+await
  <!-- 让异步代码看起来更像同步代码一样 -->
  <!-- 找到异步操作有结果的代码,前面加上await,同时接收异步操作的结果res -->
  // 登录请求
    async handleLogin() {
      // 希望让异步操作看起来像同步代码一样
      // 此时用到ES7语法提供的  async + await
        const res = await this.$http.post("login", this.formdata)
        // .then((res) => {  //不要
        console.log(res);

        // 获取想要的数据
        const {
          data,
          meta: { msg, status },
        } = res.data;
        if (status === 200) {
          // 成功，登录跳转home，提示登录成功
          // 跳转home,去找组件,js编程时导航
          this.$router.push({name:'home'})
          // 去创建home组件
          // 实现提示弹窗
          this.$message.success(msg);
        }else{
          // 失败 ,提示消息
          this.$message.warning(msg);
        }


