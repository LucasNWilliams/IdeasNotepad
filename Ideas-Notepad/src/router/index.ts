import { createRouter, createWebHistory } from 'vue-router'

export enum Home {
  Home = 'Home',
}

export enum Settings {
  Settings = 'Settings'
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
      },
      {
        path: '/settings',
        name: Settings.Settings,
        component: () => import('@/components/setings/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
