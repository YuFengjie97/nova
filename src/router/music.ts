import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const music: RouteRecordRaw = {
  path: '/music',
  component: AppVue,
  children: [
    {
      path: 'music',
      meta: {
        name: '音乐响应',
        show: true,
      },
      component: () => import('@/views/music/music.vue'),
    },
  ],
}

export default music
