import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const three: RouteRecordRaw = {
  path: '/three',
  component: AppVue,
  children: [

    {
      path: 'threeTemplate',
      meta: { name: 'threejs模板', visable: false },
      component: () => import('@/views/three/THREE-template.vue'),
    },
    {
      path: 'cubeLine',
      meta: { name: 'cubeLine', visable: false },
      component: () => import('@/views/three/CubeLine.vue'),
    },
    {
      path: 'allBufferGeo',
      meta: { name: 'allBufferGeo', visable: false },
      component: () => import('@/views/three/AllBufferGeo/AllBufferGeo.vue'),
    },
    {
      path: 'threeTextPoint',
      meta: { name: 'threeTextPoint', visable: false },
      component: () => import('@/views/three/ThreeTextPoint.vue'),
    },
    {
      path: 'threeText',
      meta: { name: 'threeText', visable: false },
      component: () => import('@/views/three/TextGeo.vue'),
    },
    {
      path: 'solarSystem',
      meta: { name: 'threejs太阳系', visable: true },
      component: () => import('@/views/three/SolarSystem.vue'),
    },
    {
      path: 'glowBall',
      meta: { name: 'glowBall', visable: false },
      component: () => import('@/views/three/GlowBall.vue'),
    },
    {
      path: 'atom',
      meta: { name: '原子', visable: true },
      component: () => import('@/views/three/Atom.vue'),
    },
    {
      path: 'lavaBall',
      meta: { name: 'lavaBall', visable: false },
      component: () => import('@/views/three/LavaBall.vue'),
    },
    {
      path: 'lensFlares',
      meta: { name: '透镜光线', visable: false },
      component: () => import('@/views/three/LensFlares.vue'),
    },

  ],
}

export default three
