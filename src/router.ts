import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starRate',
    component: () => import('@/views/StarRate.vue')
  },
  {
    path: '/flowField',
    component: () => import('@/views/FlowField.vue')
  },
  {
    path: '/flowFieldLine',
    component: () => import('@/views/FlowFieldLine.vue')
  },
  {
    path: '/flowFieldLine2',
    component: () => import('@/views/FlowFieldLine2.vue')
  },
  {
    path: '/maze',
    component: () => import('@/views/Maze.vue')
  },
  {
    path: '/gradientLine',
    component: () => import('@/views/GradientLine.vue')
  },
  {
    path: '/codeRain',
    component: () => import('@/views/CodeRain.vue')
  },
  {
    path: '/cross',
    component: () => import('@/views/Cross.vue')
  },
  {
    path: '/sun',
    component: () => import('@/views/Sun.vue')
  },
  {
    path: '/progressCube',
    component: () => import('@/views/ProgressCube.vue')
  },
  {
    path: '/deathLoading',
    component: () => import('@/views/DeathLoading.vue')
  },
  {
    path: '/musicRect',
    component: () => import('@/views/MusicRect.vue')
  },
  {
    path: '/musicCircle',
    component: () => import('@/views/MusicCircle.vue')
  },
  {
    path: '/bore',
    component: () => import('@/views/BoRe.vue')
  },
  {
    path: '/hsCard',
    component: () => import('@/views/HSCard.vue')
  },
  {
    path: '/barChart',
    component: () => import('@/views/BarChart.vue')
  },
  {
    path: '/water',
    component: () => import('@/views/Water.vue')
  },
  { path: '/:path(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
