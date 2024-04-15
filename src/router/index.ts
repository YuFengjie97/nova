import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, createWebHistory } from 'vue-router'

import css from './css'
import canvas from './canvas'
import three from './three'
import p5 from './p5'
import svg from './svg'
import shader from './shader'
import shaderToturials from './shaderTutotials'
import NotFound from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'

const home = {
  path: '/',
  meta: { name: 'home', visable: false },
  component: Home,
}
const notfound = { path: '/:path(.*)', meta: { name: 'notfound', visable: false }, component: NotFound }

export const routes = [css, canvas, p5, three, shader, shaderToturials, svg]

export const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_BASE_URL),
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [home, ...routes, notfound],
})

export * from './outlink'
