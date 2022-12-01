import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starRate',
    component: () => import('@/views/css/StarRate.vue')
  },
  {
    path: '/flowField',
    component: () => import('@/views/canvas/FlowField.vue')
  },
  {
    path: '/flowFieldLine',
    component: () => import('@/views/canvas/FlowFieldLine.vue')
  },
  {
    path: '/flowFieldLine2',
    component: () => import('@/views/p5/FlowFieldLine2.vue')
  },
  {
    path: '/maze',
    component: () => import('@/views/p5/Maze.vue')
  },
  {
    path: '/gradientLine',
    component: () => import('@/views/p5/GradientLine.vue')
  },
  {
    path: '/codeRain',
    component: () => import('@/views/p5/CodeRain.vue')
  },
  {
    path: '/cross',
    component: () => import('@/views/p5/Cross.vue')
  },
  {
    path: '/sun',
    component: () => import('@/views/css/Sun.vue')
  },
  {
    path: '/progressCube',
    component: () => import('@/views/css/ProgressCube.vue')
  },
  {
    path: '/deathLoading',
    component: () => import('@/views/css/DeathLoading.vue')
  },
  {
    path: '/musicRect',
    component: () => import('@/views/p5/MusicRect.vue')
  },
  {
    path: '/musicCircle',
    component: () => import('@/views/p5/MusicCircle.vue')
  },
  {
    path: '/bore',
    component: () => import('@/views/p5/BoRe.vue')
  },
  {
    path: '/hsCard',
    component: () => import('@/views/css/HSCard.vue')
  },
  {
    path: '/barChart',
    component: () => import('@/views/css/BarChart.vue')
  },
  {
    path: '/water',
    component: () => import('@/views/css/Water.vue')
  },
  {
    path: '/bloodBranch',
    component: () => import('@/views/p5/BloodBranch.vue')
  },
  {
    path: '/tangram',
    component: () => import('@/views/p5/Tangram.vue')
  },
  {
    path: '/terrain',
    component: () => import('@/views/p5/Terrain.vue')
  },
  {
    path: '/disperseParticle',
    component: () => import('@/views/p5/DisperseParticle.vue')
  },
  {
    path: '/disperseParticle2',
    component: () => import('@/views/p5/DisperseParticle2.vue')
  },
  {
    path: '/snake',
    component: () => import('@/views/p5/Snake.vue')
  },
  {
    path: '/crossLine',
    component: () => import('@/views/p5/CrossLine.vue')
  },
  {
    path: '/noisePixels',
    component: () => import('@/views/p5/NoisePixels.vue')
  },
  {
    path: '/lightBall',
    component: () => import('@/views/p5/LightBall.vue')
  },
  {
    path: '/flappyBird',
    component: () => import('@/views/p5/FlappyBird.vue')
  },
  {
    path: '/fireWork',
    component: ()=>import('@/views/p5/Firework.vue')
  },
  {
    path: '/pixelPicture',
    component: ()=>import('@/views/p5/PixelPicture.vue')
  },
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
    component: ()=>import('@/views/AllBufferGeo/AllBufferGeo.vue')
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
  { path: '/:path(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
