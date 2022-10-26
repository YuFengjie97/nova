import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import { RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/starRate',
    component: ()=>import('@/views/StarRate.vue')
  },
  {
    path: '/flowField',
    component: ()=>import('@/views/FlowField.vue')
  },
  {
    path: '/flowFieldLine',
    component: ()=>import('@/views/FlowFieldLine.vue')
  },
  {
    path: '/flowFieldLine2',
    component: ()=>import('@/views/FlowFieldLine2.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
