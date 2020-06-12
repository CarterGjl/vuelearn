import Vue from 'vue'
import Router from 'vue-router'

import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
// import HelloWorld from '@/components/HelloWorld'
import TodoList from '../components/TodoList'
import WelcomePage from '../components/WelcomePage'
import LoginView from '../components/LoginPage'
import ForgotPwdPage from '../components/ForgotPwdPage'
import Element from 'element-ui'
import Test from '../view/Test'
import Query from '../view/Query'
import Shopping from '../view/shopping/Shopping'
Vue.use(Router)
Vue.use(Element)
export default new Router({
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
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
    mineRouter,
    {
      path: '/test',
      component: Test
    },
    {
      path: '/query',
      component: Query
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/*',
      redirect: '/movie'
    }

  ]
})
