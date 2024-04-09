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

export const routes: RouteRecordRaw[] = [css, canvas, p5, three, shader, svg]

export const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_BASE_URL),
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [home, ...routes, notfound],
})

router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module')
    || error.message.includes('Importing a module script failed')
  ) {
    if (!to?.fullPath)
      window.location.reload()
    else
    // @ts-expect-error
      window.location = to.fullPath
  }
})

export * from './outlink'
