import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomeView.vue'

const IndexComponent = () => import('@/components/index/IndexComponent.vue')

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
