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
        visable: true,
      },
      component: () => import('@/views/css/reverseCardPic.vue'),
    },
    {
      path: 'starRate',
      meta: {
        name: '图案评分',
        visable: true,
      },
      component: () => import('@/views/css/StarRate.vue'),
    },
    {
      path: 'sun',
      meta: {
        name: '小太阳',
        visable: true,
      },
      component: () => import('@/views/css/Sun.vue'),
    },
    {
      path: 'progressCube',
      meta: {
        name: '立体进度条',
        visable: false,
      },
      component: () => import('@/views/css/ProgressCube.vue'),
    },
    {
      path: 'deathLoading',
      meta: {
        name: '死亡搁浅loading',
        visable: true,
      },
      component: () => import('@/views/css/DeathLoading.vue'),
    },
    {
      path: 'hsCard',
      meta: {
        name: '炉石卡片',
        visable: true,
      },
      component: () => import('@/views/css/HSCard.vue'),
    },
    {
      path: 'barChart',
      meta: {
        name: 'css条状表',
        visable: false,
      },
      component: () => import('@/views/css/BarChart.vue'),
    },
    {
      path: 'water',
      meta: {
        name: '模拟水滴',
        visable: true,
      },
      component: () => import('@/views/css/Water.vue'),
    },
    {
      path: 'sun-time',
      meta: {
        name: '太阳与时间倒影',
        visable: true,
      },
      component: () => import('@/views/css/timeSun.vue'),
    },
    {
      path: 'crush-pic',
      meta: {
        name: '破碎图片',
        visable: true,
      },
      component: () => import('@/views/css/crushPic.vue'),
    },
  ],
}

export default css
