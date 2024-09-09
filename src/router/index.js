import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gege',
      name: 'gege',

      component: () => import('../views/Gege.vue')
    },
    {
      path: '/peti',
      name: 'peti',

      component: () => import('../views/Peti.vue')
    },
    {
      path: '/gyuri',
      name: 'gyuri',

      component: () => import('../views/Gyuri.vue')
    }
  ]
})

export default router
