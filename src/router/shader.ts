import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const shader: RouteRecordRaw = {
  path: '/shader',
  component: AppVue,
  children: [
    {
      path: 'music-domainwrapping',
      meta: { name: 'music-domainwrapping', show: true },
      component: () => import('@/views/shader/music_domainwrapping/index.vue'),
    },
    {
      path: 'tiktok',
      meta: { name: 'icon-tiktok', show: true },
      component: () => import('@/views/shader/tiktok/index.vue'),
    },
    {
      path: 'gamepad',
      meta: { name: 'icon-gamepad', show: true },
      component: () => import('@/views/shader/gamepad/index.vue'),
    },
  ],
}

export default shader
