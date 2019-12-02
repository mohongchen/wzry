import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategorieEdit from '../views/CategorieEdit.vue'
import CategorieList from '../views/CategorieList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

Vue.use(VueRouter)

const routes = [{
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
  }]
}]

const router = new VueRouter({
  routes
})

export default router
