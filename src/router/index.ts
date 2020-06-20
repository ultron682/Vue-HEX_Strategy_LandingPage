import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/screens',
    name: 'Screens',
    component: () => import('../views/Screens-container.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact-container.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
