import Vue from 'vue'
import Router from 'vue-router'

import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import TodoList from '../components/TodoList'
import WelcomePage from '../components/WelcomePage'
import LoginView from '../components/LoginPage'
import ForgotPwdPage from '../components/ForgotPwdPage'
import Element from 'element-ui'
Vue.use(Router)
Vue.use(Element)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    }, {
      path: '/welcome',
      name: 'WelcomePage',
      component: WelcomePage
    }, {
      path: '/forget',
      name: 'ForgotPwdPage',
      component: ForgotPwdPage
    }, movieRouter,
    cinemaRouter,
    mineRouter
  ]
})
