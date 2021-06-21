import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store/store'
// import store from './store'
//导入全局样式
import '@/assets/global.css'
import 'element-ui/lib/theme-chalk/display.css';
//挂载element-ui
Vue.use(ElementUI);
Vue.config.productionTip = false

import animated from "animate.css"
Vue.use(animated)

//全局引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
//配置跨域与这是baseURL
axios.defaults.withCredentials = true;
axios.defaults.baseURL='http://82.157.179.123:8080/'
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')