import Vue from 'vue'
import Router from 'vue-router'
// import Login from "../components/login/login.vue"
// @ - >src ,vue提供的自动找到src的路径符
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    name: 'login',
    path: '/login',
    component: Login

  }, {
    name: 'home',
    path: '/',
    component: Home,
    children:[
      {
        name: 'users',
        path: 'users',
        component: Users
      }
    ]
  }]
})
