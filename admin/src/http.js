import axios from 'axios'
import Vue from 'vue'
import router from './router'
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL: 'http://localhost:3000/admin/api'
})

// 拦截器加上用户信息
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 请求头
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + (localStorage.token || '')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 响应拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message.error(err.response.data.message)
  }
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})

export default http
