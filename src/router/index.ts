import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'

const Index = () => import('@/components/Index/IndexComponent.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Index',
        component: Index
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
