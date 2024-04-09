import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const shader: RouteRecordRaw = {
  path: '/shader',
  meta: {
    name: 'Shader',
  },
  component: AppVue,
  children: [
    {
      path: 'music-domainwrapping',
      meta: { name: 'music-domainwrapping', visable: false, type: 'shader' },
      component: () => import('@/views/shader/music_domainwrapping/index.vue'),
    },
    {
      path: 'texture-icon',
      meta: { name: 'texture-icon', visable: true, type: 'shader' },
      component: () => import('@/views/shader/textureIcon/index.vue'),
    },
    {
      path: 'gamepad',
      meta: { name: 'icon-gamepad', visable: false, type: 'shader' },
      component: () => import('@/views/shader/gamepad/index.vue'),
    },
    {
      path: 'music',
      meta: { name: '音乐像素', visable: false, type: 'shader' },
      component: () => import('@/views/shader/music/index.vue'),
    },
    {
      path: 'flow',
      meta: { name: 'shader-flow', visable: true, type: 'shader' },
      component: () => import('@/views/shader/flow/index.vue'),
    },
    {
      path: 'flow2',
      meta: { name: 'shader-flow2', visable: true, type: 'shader' },
      component: () => import('@/views/shader/flow2/index.vue'),
    },
    {
      path: 'flow-net',
      meta: { name: 'shader-flow-net', visable: true, type: 'shader' },
      component: () => import('@/views/shader/flowNet/index.vue'),
    },
    {
      path: 'shader-particle-force',
      meta: { name: '粒子斥力(shader绘制)', visable: true, type: 'shader' },
      component: () => import('@/views/shader/particle_force/index.vue'),
    },
    {
      path: 'shader-voronoi-when-polar',
      meta: { name: '极坐标下的泰森图', visable: true, type: 'shader' },
      component: () => import('@/views/shader/voronoi_when_polar/index.vue'),
    },
    {
      path: 'glow-particle',
      meta: { name: '发光粒子', visable: true, type: 'shader' },
      component: () => import('@/views/shader/glow_particle/index.vue'),
    },
  ],
}

export default shader
