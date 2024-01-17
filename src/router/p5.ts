import AppVue from '@/App.vue'
import { RouteRecordRaw } from 'vue-router'

const p5:RouteRecordRaw = {
  path: '/p5',
  component: AppVue,
  children: [
    {
      path: 'flowFieldLine2',
      meta: { name: 'flowFieldLine2', show: true },
      component: () => import('@/views/p5/FlowFieldLine2.vue')
    },
    {
      path: 'maze',
      meta: { name: 'maze', show: true },
      component: () => import('@/views/p5/Maze.vue')
    },
    {
      path: 'gradientLine',
      meta: { name: 'gradientLine', show: true },
      component: () => import('@/views/p5/GradientLine.vue')
    },
    {
      path: 'codeRain',
      meta: { name: 'codeRain', show: true },
      component: () => import('@/views/p5/CodeRain.vue')
    },
    {
      path: 'cross',
      meta: { name: 'cross', show: true },
      component: () => import('@/views/p5/Cross.vue')
    },
    {
      path: 'musicRect',
      meta: { name: 'musicRect', show: true },
      component: () => import('@/views/p5/MusicRect.vue')
    },
    {
      path: 'musicCircle',
      meta: { name: 'musicCircle', show: true },
      component: () => import('@/views/p5/MusicCircle.vue')
    },
    {
      path: 'bore',
      meta: { name: 'bore', show: true },
      component: () => import('@/views/p5/BoRe.vue')
    },

    {
      path: 'bloodBranch',
      meta: { name: 'bloodBranch', show: true },
      component: () => import('@/views/p5/BloodBranch.vue')
    },
    {
      path: 'tangram',
      meta: { name: 'tangram', show: true },
      component: () => import('@/views/p5/Tangram.vue')
    },
    {
      path: 'terrain',
      meta: { name: 'terrain', show: true },
      component: () => import('@/views/p5/Terrain.vue')
    },
    {
      path: 'disperseParticle',
      meta: { name: 'disperseParticle', show: true },
      component: () => import('@/views/p5/DisperseParticle.vue')
    },
    {
      path: 'disperseParticle2',
      meta: { name: 'disperseParticle2', show: true },
      component: () => import('@/views/p5/DisperseParticle2.vue')
    },
    {
      path: 'snake',
      meta: { name: 'snake', show: true },
      component: () => import('@/views/p5/Snake.vue')
    },
    {
      path: 'crossLine',
      meta: { name: 'crossLine', show: true },
      component: () => import('@/views/p5/CrossLine.vue')
    },
    {
      path: 'noisePixels',
      meta: { name: 'noisePixels', show: true },
      component: () => import('@/views/p5/NoisePixels.vue')
    },
    {
      path: 'lightBall',
      meta: { name: 'lightBall', show: true },
      component: () => import('@/views/p5/LightBall.vue')
    },
    {
      path: 'flappyBird',
      meta: { name: 'flappyBird', show: true },
      component: () => import('@/views/p5/FlappyBird.vue')
    },
    {
      path: 'fireWork',
      meta: { name: 'fireWork', show: true },
      component: () => import('@/views/p5/Firework.vue')
    },
    {
      path: 'pixelPicture',
      meta: { name: 'pixelPicture', show: true },
      component: () => import('@/views/p5/PixelPicture.vue')
    },
  ]
}

export default p5