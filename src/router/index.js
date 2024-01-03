import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/posilovani',
    name: 'posilovani',
    component: () => import('../views/PosilovaniPage.vue')
  },
  {
    path: '/balet',
    name: 'balet',
    component: () => import('../views/BaletPage.vue')
  },
  {
    path: '/rozcvicka',
    name: 'rozcvicka',
    component: () => import('../views/RozcvickaPage.vue')
  },
  {
    path: '/technika',
    name: 'technika',
    component: () => import('../views/TechnikaPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    return {left: 0, top: 0}
  },

})

export default router
