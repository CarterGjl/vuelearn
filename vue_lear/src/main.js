// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import contextmenu from 'vue-contextmenujs'
import Axios from 'axios'
import {currency} from './currency'
// import store from './view/Counter'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.axios = Axios
Vue.filter('currency', currency)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store: store,
  router,
  components: {App},
  template: '<App/>',
  data: {
    // message: '页面加载' + new Date().toDateString()
  }
})
