import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogView
    }
  ]
})

export default router
