import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './route/router.config.js'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'animate.css/animate.css'
import store from './store/index.js'
import filters from './filters/filterTime.js'
Vue.filter('filterTime', filters);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(Vuex);
axios.interceptors.request.use(function (config) {//配置发送请求信息的拦截器
  store.dispatch('showLoading');
  return config;
},function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  store.dispatch('hideLoading');
  return response;
},function (error) {
  return Promise.reject(error);
});
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
