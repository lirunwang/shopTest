// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import router from './router'
// import axios from 'axios'
// Vue.prototype.$http=axios
// 此时我们也想像vue插件一样使用Vue.use()全局可用,则创造
import MyAxios from '@/plugins/http.js'


Vue.config.productionTip = false

Vue.use(ElementUI)
// 使用自己封装的外部插件
Vue.use(MyAxios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 下面两行代码相当于render：（h）=>h(APP)
  components: {
    App
  },
  template: '<App/>'
  // 相当于'<APP></APP>'
})
