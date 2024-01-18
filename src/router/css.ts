import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const css: RouteRecordRaw = {
  path: '/css',
  component: AppVue,
  children: [
    {
      path: 'reverseCard',
      meta: {
        name: '反转卡片图片',
        show: true,
      },
      component: () => import('@/views/css/reverseCardPic.vue'),
    },
    {
      path: 'starRate',
      meta: {
        name: '图案评分',
        show: true,
      },
      component: () => import('@/views/css/StarRate.vue'),
    },
    {
      path: 'sun',
      meta: {
        name: '小太阳',
        show: true,
      },
      component: () => import('@/views/css/Sun.vue'),
    },
    {
      path: 'progressCube',
      meta: {
        name: '立体进度条',
        show: true,
      },
      component: () => import('@/views/css/ProgressCube.vue'),
    },
    {
      path: 'deathLoading',
      meta: {
        name: '死亡搁浅loading',
        show: true,
      },
      component: () => import('@/views/css/DeathLoading.vue'),
    },
    {
      path: 'hsCard',
      meta: {
        name: '炉石卡片',
        show: true,
      },
      component: () => import('@/views/css/HSCard.vue'),
    },
    {
      path: 'barChart',
      meta: {
        name: 'css条状表',
        show: false,
      },
      component: () => import('@/views/css/BarChart.vue'),
    },
    {
      path: 'water',
      meta: {
        name: '模拟水滴',
        show: true,
      },
      component: () => import('@/views/css/Water.vue'),
    },
  ],
}

export default css
