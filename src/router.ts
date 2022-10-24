import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'


interface Route {
  path: string
  name: string
  component: any
  children: Array<Route>
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/starRate',
    component: ()=>import('@/views/StarRate.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
