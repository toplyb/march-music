import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomeView.vue'

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
