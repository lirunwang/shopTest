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

# 8、新建分支并切换
git checkout -b 分支名


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

# 登录-保存token
<!-- 1 -目的:防止用户没登陆,直接通过url直接去访问页面 -->
<!-- 2 -在登录成功时,保存后台返回给用户的token值 -->
localStorage.setItem('token',data.token)   //字符串token


# 三.home页面布局
1 页面布局引用elemenui的页面容器
2 头部样式调整
 layout,el-row行el-col列

 # 首页侧边导航
    >el-menu
    >router 开启路由模式,true index值==path值
    unique-opened是否之保持一个子菜单的展开

    >调整侧边导航
    index值 不能一样,不然全部为一个的导航效果

# 用户登录-进入首页的权限认证
<!-- if 有token,则渲染加载home组件,没有,则跳转登录 -->
<!-- 进入home组件的token验证 -->
  // 如果有token,则继续执行组件渲染加载,
  // 如果没有,则跳转到登录
  // 如何在组件渲染之前执行验证,那么创建vue实例是mount方法执行
  // 所以要在new vue之前执行验证 =>beforeCreate
  beforeCreate() {
    // 获取token
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      this.$router.push({ name: "login" });
    } else {
    }
  },

  # 用户退出
  >绑定一个事件方法,在方法里清除token,提示信息,跳转组件login
methods: {
    //   点击退出
    handlesignout() {
      //   清除token
      localStorage.clear();
      // 提示消息
      this.$message.success("退出成功");
      // 跳转登录
      this.$router.push({ name: "login" });
    },
  },


  # 四.用户管理-用户列表-新建users组件-配置路由
  1-home组件开启了路由模式,index的值->path值(elementui封装提供的功能)
  2-Attribut的router写在导航的父容器身上,开启路由功能
    :router="true"
  3-设置容器 =>在main中
  4-新建组件users
  4-配置路由router/index.js,
  5-user路由设置在home路由的子路由children中,users在heme中,所以现有home后有users

  # 五.users组件
  1-"el-card" 卡片,小容器
  2-面包屑
  3-inputSearch + ico + button
  4-调整样式

  # users组件引入表格部分
  1 <el-table
    :data="tableData"    //data 数据源[]
    style="width: 100%">
    <el-table-column(label表头/prop="数据")>字符串数据
  2 按照效果,调整了表头的数量和label
  3 type="index" ,该列的每个单元格的内容从1开始的序号

  # 获取users表格数据
    接口文档中，由于请求API进行了权限认证，所以要设置请求头的发送信息
    获取到token
    const AUTH_TOKEN = localStorage.getItem("token")
    <!-- 设置请求头 -->
    this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    创建钩子函数，即获取到初始化的数据
    created（）{}
    执行获取请求
    methods：{getUsersList(){ this.$http.get(`模板字符串最好，过长字符串会出现查询语句执行出错`)  }}

    =》
    .get(
          `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
        )
    
    对象解构赋值，const { meta:{status,msg} ,data:{users,tatal}} = res.data;
    给单元格传输真实数据，prop="username"……

# 全局过滤器处理日期格式
<!-- 安装全局过滤器fmtdate -->
1--导入moment
import moment from 'moment'
2-创建全局过滤器，在new vue({})  之前
    Vue.filter('fmtdate', (v) => {
        return moment(v).format('YYYY-MM-DD')
     })

<!-- 如果单元格想要渲染一个不是字符串（文本）的内容，那么需要用到插值表达式 -->
<!-- 要用插值表达式，需要为内容的外层包裹一个小容器template -->
<!-- 此时相当于组件传值，则给template提供了一个slot-scope属性用来追踪上级数据源 -->
<!-- array.row代表数组中每个对象，自带属性，那么用array.row.需要的值createtime进行格式处理 -->
<!-- 原来通过prop绑定的值作废，删除此属性 -->
<el-table-column label="创建时间">
        <!-- template内部要用数据，设置slot-scope属性 -->
        <!-- 该属性的值是要用数据的数据源userslist -->
        <!-- slot-scope的值userslist其实就是el-table绑定的数据userslist -->
        <!-- userslist.row数组中的每个对象，usersList.row自带属性 -->
        <!-- <template slot-scope="usersList"> -->
          <!-- slot是自动去找上一级最外层table的数据源，所以值也可以是一个任意的字符代替 -->
          <template slot-scope="scope">
          {{scope.row.create_time|fmtdate}}
        </template>
      </el-table-column>

# 用户状态的开关
1、引入开关el-switch
2、此时这个开关放在这个element单元格标签里并不合适，因为不是字符串或文本
3、那么就用到一个小容器给包裹起来，template
4、和过滤器处理时间格式一样的原理，需要给template添加一个属性slot-scope
    实现组件间的传值
5、给开关的绑定值改写成scope.row.mg_state
<!-- 此时就OK了，可以任意切换 -->

# 操作的图标
1、容器里面不是字符串，则用template slot-scope="scope"
2、el-button
3、size="mini"  是否朴素 plain

# 分页功能的实现
1、引入el-pagination
2、方法
@size-change="handleSizeChange" 当每页显示条数变化时 触发
@current-change="handleCurrentChange"  当前页改变时触发 
:current-page="currentPage4" 设置当前页是第几页
:page-sizes="[100, 200, 300, 400]" 设置每页多少条的数据
:page-size="100"    设置显示多少条
:total="400"   数据总数
3、配置数据
    @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"


    