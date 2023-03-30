import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomeView.vue'

const IndexComponent = () => import('@/pages/IndexComponent.vue')
const SingerView = () => import('@/pages/SingerView.vue')

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/song',
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'singer',
        component: SingerView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
