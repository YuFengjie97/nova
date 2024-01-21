import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const svg: RouteRecordRaw = {
  path: '/svg',
  component: AppVue,
  children: [
    {
      path: 'tiktok',
      meta: { name: 'tiktok_anima', show: true },
      component: () => import('@/views/svg/tiktok/index.vue'),
    },
  ],
}

export default svg
