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
      path: 'texture-icon',
      meta: { name: 'texture-icon', show: true },
      component: () => import('@/views/shader/textureIcon/index.vue'),
    },
    {
      path: 'gamepad',
      meta: { name: 'icon-gamepad', show: false },
      component: () => import('@/views/shader/gamepad/index.vue'),
    },
  ],
}

export default shader
