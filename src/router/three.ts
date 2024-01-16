import { RouteRecordRaw } from 'vue-router'

const three: RouteRecordRaw = {
  path: '/three',
  children: [
  
    {
      path:'/threeTemplate',
      component: ()=>import('@/views/three/THREE-template.vue')
    },
    {
      path: '/cubeLine',
      component: ()=>import('@/views/three/CubeLine.vue')
    },
    {
      path: '/allBufferGeo',
      component: ()=>import('@/views/three/AllBufferGeo/AllBufferGeo.vue')
    },
    {
      path: '/canvasTextPoint',
      component: ()=>import('@/views/canvas/CanvasTextPoint.vue')
    },
    {
      path: '/threeTextPoint',
      component: ()=>import('@/views/three/ThreeTextPoint.vue')
    },
    {
      path: '/threeText',
      component: ()=>import('@/views/three/TextGeo.vue')
    },
    {
      path: '/solarSystem',
      component: () => import('@/views/three/SolarSystem.vue')
    },
    {
      path: '/glowBall',
      component: ()=>import('@/views/three/GlowBall.vue')
    },
    {
      path: '/atom',
      component: ()=>import('@/views/three/Atom.vue')
    },
    {
      path: '/lavaBall',
      component: ()=>import('@/views/three/LavaBall.vue')
    },
    {
      path: '/lensFlares',
      component: ()=>import('@/views/three/LensFlares.vue')
    },

  ]
}

export default three