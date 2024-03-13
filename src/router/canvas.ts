import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const canvas: RouteRecordRaw = {
  path: '/canvas',
  component: AppVue,
  children: [
    {
      path: 'flowField',
      meta: {
        type: 'canvas',
        name: 'FlowField(fabric)',
        visable: true,
      },
      component: () => import('@/views/canvas/FlowField.vue'),
    },
    {
      path: 'flowFieldLine',
      meta: {
        type: 'canvas',
        name: 'FlowFieldLine',
        visable: false,
      },
      component: () => import('@/views/canvas/FlowFieldLine.vue'),
    },
    {
      path: 'canvasTextPoint',
      meta: { type: 'canvas', name: 'canvasTextPoint', visable: false },
      component: () => import('@/views/canvas/CanvasTextPoint.vue'),
    },
    {
      path: 'canvasPoint',
      meta: {
        type: 'canvas',
        name: '图片点阵化',
        visable: true,
      },
      component: () => import('@/views/canvas/canvasPoint.vue'),
    },
    {
      path: 'flow',
      meta: {
        type: 'canvas',
        name: 'mac锁屏flow',
        visable: true,
      },
      component: () => import('@/views/canvas/flow.vue'),
    },
    {
      path: 'delaunator',
      meta: {
        type: 'canvas',
        name: '三角切分',
        visable: true,
      },
      component: () => import('@/views/canvas/delaunator.vue'),
    },
    {
      path: 'circuit-borad',
      meta: {
        type: 'canvas',
        name: '电路板',
        visable: true,
      },
      component: () => import('@/views/canvas/circuitBoard.vue'),
    },
    {
      path: 'img-idle',
      meta: {
        type: 'canvas',
        name: '图片做Idle',
        visable: false,
      },
      component: () => import('@/views/canvas/imgIdle.vue'),
    },
    {
      path: 'nyan-cat',
      meta: {
        type: 'canvas',
        name: '彩虹猫',
        visable: true,
      },
      component: () => import('@/views/canvas/nyanCat.vue'),
    },
    {
      path: 'particle-life',
      meta: {
        type: 'canvas',
        name: '粒子生命模拟',
        visable: true,
      },
      component: () => import('@/views/canvas/particleLife.vue'),
    },
    {
      path: 'test',
      meta: {
        type: 'canvas',
        name: 'test',
        visable: false,
      },
      component: () => import('@/views/canvas/test.vue'),
    },
    {
      path: 'game-of-life',
      meta: {
        type: 'canvas',
        name: '生命游戏',
        visable: true,
      },
      component: () => import('@/views/canvas/gameOfLife.vue'),
    },
    {
      path: 'music-mhsb',
      meta: {
        type: 'canvas',
        name: '迷幻水波',
        visable: true,
      },
      component: () => import('@/views/canvas/music/mihuanshuibo.vue'),
    },
    {
      path: 'test',
      meta: {
        type: 'canvas',
        name: 'test',
        visable: false,
      },
      component: () => import('@/views/canvas/test.vue'),
    },
  ],
}

export default canvas
