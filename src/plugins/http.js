// 插件模块

// 没有axios,则导入
import axios from 'axios'

// MyPlugin一看是个对象
// 所以我们自定义一个对象
const MyHttpSever={}
// MyPlugin.install = function (Vue, options) {
    MyHttpSever.install=(Vue)=>{

      // 设置之前，给一个统一的基准url
      axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
    //  添加实例方法
    Vue.prototype.$http = axios
  }
  export default MyHttpSever