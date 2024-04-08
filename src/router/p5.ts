import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const p5: RouteRecordRaw = {
  path: '/p5',
  meta: {
    name: 'p5',
  },
  component: AppVue,
  children: [
    {
      path: 'flowFieldLine2',
      meta: { name: 'flowFieldLine2', visable: false },
      component: () => import('@/views/p5/FlowFieldLine2.vue'),
    },
    {
      path: 'maze',
      meta: { name: '随机迷宫', visable: true },
      component: () => import('@/views/p5/Maze.vue'),
    },
    {
      path: 'gradientLine',
      meta: { name: 'gradientLine', visable: false },
      component: () => import('@/views/p5/GradientLine.vue'),
    },
    {
      path: 'codeRain',
      meta: { name: 'codeRain', visable: false },
      component: () => import('@/views/p5/CodeRain.vue'),
    },
    {
      path: 'cross',
      meta: { name: 'cross', visable: false },
      component: () => import('@/views/p5/Cross.vue'),
    },
    {
      path: 'musicRect',
      meta: { name: 'musicRect', visable: false },
      component: () => import('@/views/p5/MusicRect.vue'),
    },
    {
      path: 'musicCircle',
      meta: { name: 'musicCircle', visable: false },
      component: () => import('@/views/p5/MusicCircle.vue'),
    },
    {
      path: 'bore',
      meta: { name: '般若心经', visable: true },
      component: () => import('@/views/p5/BoRe.vue'),
    },
    {
      path: 'tangram',
      meta: { name: '七巧板', visable: true },
      component: () => import('@/views/p5/Tangram.vue'),
    },
    {
      path: 'terrain',
      meta: { name: 'terrain', visable: false },
      component: () => import('@/views/p5/Terrain.vue'),
    },
    {
      path: 'disperseParticle',
      meta: { name: 'disperseParticle', visable: false },
      component: () => import('@/views/p5/DisperseParticle.vue'),
    },
    {
      path: 'disperseParticle2',
      meta: { name: 'disperseParticle2', visable: false },
      component: () => import('@/views/p5/DisperseParticle2.vue'),
    },
    {
      path: 'snake',
      meta: { name: '贪吃蛇', visable: true },
      component: () => import('@/views/p5/Snake.vue'),
    },
    {
      path: 'lightBall',
      meta: { name: 'lightBall', visable: false },
      component: () => import('@/views/p5/LightBall.vue'),
    },
    {
      path: 'flappyBird',
      meta: { name: '像素鸟(canvas)', visable: true },
      component: () => import('@/views/p5/FlappyBird.vue'),
    },
    {
      path: 'fireWork',
      meta: { name: 'fireWork', visable: false },
      component: () => import('@/views/p5/Firework.vue'),
    },
    {
      path: 'pixelPicture',
      meta: { name: '图片像素化', visable: true },
      component: () => import('@/views/p5/PixelPicture.vue'),
    },
  ],
}

export default p5
