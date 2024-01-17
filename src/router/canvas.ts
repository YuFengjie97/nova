import AppVue from '@/App.vue'
import { RouteRecordRaw } from 'vue-router'

const canvas: RouteRecordRaw = {
  path: '/three',
  component: AppVue,
  children: [
    {
      path: 'flowField',
      meta: {
        name: 'FlowField',
        show: true
      },
      component: () => import('@/views/canvas/FlowField.vue')
    },
    {
      path: 'flowFieldLine',
      meta: {
        name: 'FlowFieldLine',
        show: false
      },
      component: () => import('@/views/canvas/FlowFieldLine.vue')
    },
    {
      path: 'canvasTextPoint',
      meta: { name: 'canvasTextPoint', show: false }, component: () => import('@/views/canvas/CanvasTextPoint.vue')
    },
    {
      path: 'canvasPoint',
      meta: {
        name: '图形点阵',show: true
      },
      component: () => import('@/views/canvas/canvasPoint.vue')
    },
  ]
}

export default canvas