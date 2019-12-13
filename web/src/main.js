import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入全局样式文件
import './assets/scss/style.scss'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 字体图标
import './assets/iconfont/iconfont.css'
// 自定义组件
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
import axios from 'axios'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
