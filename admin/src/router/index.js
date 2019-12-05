import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'

import Main from '../views/Main.vue'
import CategorieEdit from '../views/CategorieEdit.vue'
import CategorieList from '../views/CategorieList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'
import AdsEdit from '../views/AdsEdit.vue'
import AdsList from '../views/AdsList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    isPublic: true
  }
}, {
  path: '/',
  name: 'main',
  component: Main,
  children: [{
    path: '/categorie/create',
    component: CategorieEdit
  }, {
    path: '/categorie/edit/:id',
    component: CategorieEdit,
    props: true
  }, {
    path: '/categorie/list',
    component: CategorieList
  }, {
    path: '/items/create',
    component: ItemEdit
  }, {
    path: '/items/edit/:id',
    component: ItemEdit,
    props: true
  }, {
    path: '/items/list',
    component: ItemList
  }, {
    path: '/heros/create',
    component: HeroEdit
  }, {
    path: '/heros/edit/:id',
    component: HeroEdit,
    props: true
  }, {
    path: '/heros/list',
    component: HeroList
  }, {
    path: '/articles/create',
    component: ArticleEdit
  }, {
    path: '/articles/edit/:id',
    component: ArticleEdit,
    props: true
  }, {
    path: '/articles/list',
    component: ArticleList
  }, {
    path: '/ads/create',
    component: AdsEdit
  }, {
    path: '/ads/edit/:id',
    component: AdsEdit,
    props: true
  }, {
    path: '/ads/list',
    component: AdsList
  }, {
    path: '/admin_users/create',
    component: AdminUserEdit
  }, {
    path: '/admin_users/edit/:id',
    component: AdminUserEdit,
    props: true
  }, {
    path: '/admin_users/list',
    component: AdminUserList
  }]
}]

const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    next('/login')
  }
  next()
})

export default router
