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
  ],
}

export default shader
