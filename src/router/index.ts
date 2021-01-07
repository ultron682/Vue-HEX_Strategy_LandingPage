import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeContainer from '../views/Home-container.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeContainer
  },
  {
    path: '/gameplay',
    name: 'Gameplay',
    component: () => import('@/views/Screens-container.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact-container.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
