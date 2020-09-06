import Vue from 'vue'
import Router from 'vue-router'
// import Login from "../components/login/login.vue"
// @ - >src ,vue提供的自动找到src的路径符
import Login from '@/components/login/login.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    name: 'Login',
    path: '/login',
    component: Login

  }]
})
