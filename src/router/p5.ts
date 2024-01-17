import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const p5: RouteRecordRaw = {
  path: '/p5',
  component: AppVue,
  children: [
    {
      path: 'flowFieldLine2',
      meta: { name: 'flowFieldLine2', show: false },
      component: () => import('@/views/p5/FlowFieldLine2.vue'),
    },
    {
      path: 'maze',
      meta: { name: '随机迷宫', show: true },
      component: () => import('@/views/p5/Maze.vue'),
    },
    {
      path: 'gradientLine',
      meta: { name: 'gradientLine', show: false },
      component: () => import('@/views/p5/GradientLine.vue'),
    },
    {
      path: 'codeRain',
      meta: { name: 'codeRain', show: false },
      component: () => import('@/views/p5/CodeRain.vue'),
    },
    {
      path: 'cross',
      meta: { name: 'cross', show: false },
      component: () => import('@/views/p5/Cross.vue'),
    },
    {
      path: 'musicRect',
      meta: { name: 'musicRect', show: true },
      component: () => import('@/views/p5/MusicRect.vue'),
    },
    {
      path: 'musicCircle',
      meta: { name: 'musicCircle', show: true },
      component: () => import('@/views/p5/MusicCircle.vue'),
    },
    {
      path: 'bore',
      meta: { name: '般若心经', show: true },
      component: () => import('@/views/p5/BoRe.vue'),
    },
    {
      path: 'tangram',
      meta: { name: '七巧板', show: true },
      component: () => import('@/views/p5/Tangram.vue'),
    },
    {
      path: 'terrain',
      meta: { name: 'terrain', show: false },
      component: () => import('@/views/p5/Terrain.vue'),
    },
    {
      path: 'disperseParticle',
      meta: { name: 'disperseParticle', show: false },
      component: () => import('@/views/p5/DisperseParticle.vue'),
    },
    {
      path: 'disperseParticle2',
      meta: { name: 'disperseParticle2', show: false },
      component: () => import('@/views/p5/DisperseParticle2.vue'),
    },
    {
      path: 'snake',
      meta: { name: '贪吃蛇', show: true },
      component: () => import('@/views/p5/Snake.vue'),
    },
    {
      path: 'lightBall',
      meta: { name: 'lightBall', show: false },
      component: () => import('@/views/p5/LightBall.vue'),
    },
    {
      path: 'flappyBird',
      meta: { name: 'flappyBird', show: true },
      component: () => import('@/views/p5/FlappyBird.vue'),
    },
    {
      path: 'fireWork',
      meta: { name: 'fireWork', show: false },
      component: () => import('@/views/p5/Firework.vue'),
    },
    {
      path: 'pixelPicture',
      meta: { name: '图片像素化', show: true },
      component: () => import('@/views/p5/PixelPicture.vue'),
    },
  ],
}

export default p5
