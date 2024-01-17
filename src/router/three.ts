import AppVue from '@/App.vue'
import { RouteRecordRaw } from 'vue-router'

const three: RouteRecordRaw = {
  path: '/three',
  component: AppVue,
  children: [

    {
      path: 'threeTemplate',
      meta: { name: '', show: true },
      component: () => import('@/views/three/THREE-template.vue')
    },
    {
      path: 'cubeLine',
      meta: { name: 'cubeLine', show: true }, component: () => import('@/views/three/CubeLine.vue')
    },
    {
      path: 'allBufferGeo',
      meta: { name: 'allBufferGeo', show: true }, component: () => import('@/views/three/AllBufferGeo/AllBufferGeo.vue')
    },
    {
      path: 'threeTextPoint',
      meta: { name: 'threeTextPoint', show: true }, component: () => import('@/views/three/ThreeTextPoint.vue')
    },
    {
      path: 'threeText',
      meta: { name: 'threeText', show: true }, component: () => import('@/views/three/TextGeo.vue')
    },
    {
      path: 'solarSystem',
      meta: { name: 'solarSystem', show: true }, component: () => import('@/views/three/SolarSystem.vue')
    },
    {
      path: 'glowBall',
      meta: { name: 'glowBall', show: true }, component: () => import('@/views/three/GlowBall.vue')
    },
    {
      path: 'atom',
      meta: { name: 'atom', show: true }, component: () => import('@/views/three/Atom.vue')
    },
    {
      path: 'lavaBall',
      meta: { name: 'lavaBall', show: true }, component: () => import('@/views/three/LavaBall.vue')
    },
    {
      path: 'lensFlares',
      meta: { name: 'lensFlares', show: true }, component: () => import('@/views/three/LensFlares.vue')
    },

  ]
}

export default three