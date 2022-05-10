import Vue from 'vue'
import App from './App.vue'
import router from './router'

// <비동기를 위한 모듈 axios 사용>
import axios from 'axios' // 설치한 axios 모듈을 불러오고
Vue.prototype.$http = axios; // vue의 http객체 자체에 axios를 적용시킴

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
