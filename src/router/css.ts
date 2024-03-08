import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const css: RouteRecordRaw = {
  path: '/css',
  component: AppVue,
  children: [
    {
      path: 'reverseCard',
      meta: {
        type: 'css',
        name: '反转卡片图片',
        visable: true,
      },
      component: () => import('@/views/css/reverseCardPic.vue'),
    },
    {
      path: 'starRate',
      meta: {
        type: 'css',
        name: '图案评分',
        visable: true,
      },
      component: () => import('@/views/css/StarRate.vue'),
    },
    {
      path: 'sun',
      meta: {
        type: 'css',
        name: '小太阳',
        visable: true,
      },
      component: () => import('@/views/css/Sun.vue'),
    },
    {
      path: 'progressCube',
      meta: {
        type: 'css',
        name: '立体进度条',
        visable: false,
      },
      component: () => import('@/views/css/ProgressCube.vue'),
    },
    {
      path: 'deathLoading',
      meta: {
        type: 'css',
        name: '死亡搁浅loading',
        visable: true,
      },
      component: () => import('@/views/css/DeathLoading.vue'),
    },
    {
      path: 'hsCard',
      meta: {
        type: 'css',
        name: '炉石卡片',
        visable: true,
      },
      component: () => import('@/views/css/HSCard.vue'),
    },
    {
      path: 'barChart',
      meta: {
        type: 'css',
        name: 'css条状表',
        visable: false,
      },
      component: () => import('@/views/css/BarChart.vue'),
    },
    {
      path: 'water',
      meta: {
        type: 'css',
        name: '模拟水滴',
        visable: false,
      },
      component: () => import('@/views/css/Water.vue'),
    },
    {
      path: 'sun-time',
      meta: {
        type: 'css',
        name: '太阳与时间倒影',
        visable: true,
      },
      component: () => import('@/views/css/timeSun.vue'),
    },
    {
      path: 'crush-pic',
      meta: {
        type: 'css',
        name: '破碎图片',
        visable: true,
      },
      component: () => import('@/views/css/crushPic.vue'),
    },
  ],
}

export default css
