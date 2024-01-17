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
        show: true
      },
      component: () => import('@/views/canvas/FlowFieldLine.vue')
    },
  ]
}

export default canvas