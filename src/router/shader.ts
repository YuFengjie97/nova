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
    {
      path: 'flow2',
      meta: { name: 'shader-flow2', visable: true, type: 'threejs' },
      component: () => import('@/views/shader/flow2/index.vue'),
    },
    {
      path: 'flow-net',
      meta: { name: 'shader-flow-net', visable: true, type: 'threejs' },
      component: () => import('@/views/shader/flowNet/index.vue'),
    },
    {
      path: 'shader-particle-force',
      meta: { name: '粒子斥力(shader绘制)', visable: true, type: 'threejs' },
      component: () => import('@/views/shader/particle_force/index.vue'),
    },
  ],
}

export default shader
