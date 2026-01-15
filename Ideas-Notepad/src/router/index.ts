import { createRouter, createWebHistory } from 'vue-router'

export enum Home {
  Home = 'Home',
}

const routes = [
  {
    path: '/appLayout',
    component: () => import('@/AppLayout.vue'),
    children: [
      {
        path: '/',
        name: Home.Home,
        component: () => import('@/components/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
