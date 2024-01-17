import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHashHistory,createWebHistory  } from 'vue-router'

import css from './css'
import canvas from './canvas'
import three from './three'
import p5 from './p5'

const home: RouteRecordRaw = {
  path: '/',
  meta: { name: 'home', show: false },
  component: Home
}
const d: RouteRecordRaw = {
  path: '/css/starRate',
  meta: {
    name: '图案评分',
    show: true,
  },
  component: () => import('@/views/css/StarRate.vue')
}
const notfound: RouteRecordRaw = { path: '/:path(.*)', meta: { name: 'notfound', show: false }, component: NotFound }

export const routes: RouteRecordRaw[] = [home, css, canvas, three, p5, notfound]

console.log(routes);

export const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_BASE_URL),
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})
