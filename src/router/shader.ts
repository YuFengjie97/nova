import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const shader: RouteRecordRaw = {
  path: '/shader',
  component: AppVue,
  children: [
    {
      path: 'music-domainwrapping',
      meta: { name: 'music-domainwrapping', visable: false },
      component: () => import('@/views/shader/music_domainwrapping/index.vue'),
    },
    {
      path: 'texture-icon',
      meta: { name: 'texture-icon', visable: true },
      component: () => import('@/views/shader/textureIcon/index.vue'),
    },
    {
      path: 'gamepad',
      meta: { name: 'icon-gamepad', visable: false },
      component: () => import('@/views/shader/gamepad/index.vue'),
    },
    {
      path: 'music',
      meta: { name: '音乐像素', visable: false, type: 'threejs' },
      component: () => import('@/views/shader/music/index.vue'),
    },
    {
      path: 'flow',
      meta: { name: 'shader-flow', visable: true, type: 'threejs' },
      component: () => import('@/views/shader/flow/index.vue'),
    },
  ],
}

export default shader
