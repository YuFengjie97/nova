import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const svg: RouteRecordRaw = {
  path: '/svg',
  component: AppVue,
  children: [
    {
      path: 'tiktok',
      meta: { name: 'tiktok_anima', visable: true, type: 'svg' },
      component: () => import('@/views/svg/tiktok/index.vue'),
    },
    {
      path: 'circuit-board',
      meta: { name: '电路板-svg', visable: true, type: 'svg' },
      component: () => import('@/views/svg/circuitBoard.vue'),
    },
    {
      path: 'circuit-board-2',
      meta: { name: '电路板-svg-蓝', visable: true, type: 'svg' },
      component: () => import('@/views/svg/circuitBoard2.vue'),
    },
  ],
}

export default svg
