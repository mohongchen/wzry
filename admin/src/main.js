import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './http'
import './style.css'

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.mixin({
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
