import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'
import crushPic from '@/views/three/crushPic.vue'

const three: RouteRecordRaw = {
  path: '/three',
  meta: {
    name: 'three.js',
  },
  component: AppVue,
  children: [

    {
      path: 'threeTemplate',
      meta: { type: 'threejs', name: 'threejs模板', visable: false },
      component: () => import('@/views/three/THREE-template.vue'),
    },
    {
      path: 'cubeLine',
      meta: { type: 'threejs', name: 'cubeLine', visable: false },
      component: () => import('@/views/three/CubeLine.vue'),
    },
    {
      path: 'allBufferGeo',
      meta: { type: 'threejs', name: 'allBufferGeo', visable: false },
      component: () => import('@/views/three/AllBufferGeo/AllBufferGeo.vue'),
    },
    {
      path: 'threeTextPoint',
      meta: { type: 'threejs', name: 'threeTextPoint', visable: false },
      component: () => import('@/views/three/ThreeTextPoint.vue'),
    },
    {
      path: 'threeText',
      meta: { type: 'threejs', name: 'threeText', visable: false },
      component: () => import('@/views/three/TextGeo.vue'),
    },
    {
      path: 'solarSystem',
      meta: { type: 'threejs', name: 'threejs太阳系', visable: false },
      component: () => import('@/views/three/SolarSystem.vue'),
    },
    {
      path: 'glowBall',
      meta: { type: 'threejs', name: 'glowBall', visable: false },
      component: () => import('@/views/three/GlowBall.vue'),
    },
    {
      path: 'atom',
      meta: { type: 'threejs', name: '原子', visable: false },
      component: () => import('@/views/three/Atom.vue'),
    },
    {
      path: 'lavaBall',
      meta: { type: 'threejs', name: 'lavaBall', visable: false },
      component: () => import('@/views/three/LavaBall.vue'),
    },
    {
      path: 'lensFlares',
      meta: { type: 'threejs', name: '透镜光线', visable: false },
      component: () => import('@/views/three/LensFlares.vue'),
    },
    {
      path: 'crush-pic',
      meta: { type: 'threejs', name: '破碎图片-threejs', visable: true },
      component: crushPic,
      // component: () => import(/* @vite-ignore */'@/views/three/crushPic.vue'),
    },
    {
      path: 'flowfield-point-3d',
      meta: { type: 'threejs', name: 'flowField-粒子-3D', visable: true },
      component: () => import('@/views/three/flowFieldPoint3D.vue'),
    },
    {
      path: 'particle-life',
      meta: { type: 'threejs', name: '粒子生命模拟', visable: true },
      component: () => import('@/views/three/particleLife.vue'),
    },
  ],
}

export default three
