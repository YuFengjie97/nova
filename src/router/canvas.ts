import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const canvas: RouteRecordRaw = {
  path: '/canvas',
  component: AppVue,
  children: [
    {
      path: 'flowField',
      meta: {
        name: 'FlowField(fabric)',
        show: true,
      },
      component: () => import('@/views/canvas/FlowField.vue'),
    },
    {
      path: 'flowFieldLine',
      meta: {
        name: 'FlowFieldLine',
        show: false,
      },
      component: () => import('@/views/canvas/FlowFieldLine.vue'),
    },
    {
      path: 'canvasTextPoint',
      meta: { name: 'canvasTextPoint', show: false },
      component: () => import('@/views/canvas/CanvasTextPoint.vue'),
    },
    {
      path: 'canvasPoint',
      meta: {
        name: '图片点阵化',
        show: true,
      },
      component: () => import('@/views/canvas/canvasPoint.vue'),
    },
    {
      path: 'flow',
      meta: {
        name: 'mac锁屏flow',
        show: true,
      },
      component: () => import('@/views/canvas/flow.vue'),
    },
    {
      path: 'delaunator',
      meta: {
        name: '三角切分',
        show: true,
      },
      component: () => import('@/views/canvas/delaunator.vue'),
    },
  ],
}

export default canvas
