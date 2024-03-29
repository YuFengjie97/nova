import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, createWebHistory } from 'vue-router'

import css from './css'
import canvas from './canvas'
import three from './three'
import p5 from './p5'
import svg from './svg'
import shader from './shader'
import NotFound from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'

const home: RouteRecordRaw = {
  path: '/',
  meta: { name: 'home', visable: false },
  component: Home,
}
const notfound: RouteRecordRaw = { path: '/:path(.*)', meta: { name: 'notfound', visable: false }, component: NotFound }

export const routes: RouteRecordRaw[] = [home, css, canvas, p5, three, shader, svg, notfound]

export const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_BASE_URL),
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export * from './outlink'
