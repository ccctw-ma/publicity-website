import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// import store from './store'
//导入全局样式
import '@/assets/global.css'
//挂载element-ui
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app')
