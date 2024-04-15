import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const shader: RouteRecordRaw = {
  path: '/shader-toturial',
  meta: {
    name: 'ShaderToturial',
    des: '我受够无法实现我脑子里效果的状态了，痛苦啊！所以开了一个新坑来“系统”学习',
  },
  component: AppVue,
  children: [
    {
      path: 'smile-face',
      meta: { name: '笑脸', visable: true, type: 'shader' },
      component: () => import('@/views/shaderToturials/smile_face/index.vue'),
    },
    {
      path: 'band',
      meta: { name: 'band', visable: true, type: 'shader' },
      component: () => import('@/views/shaderToturials/band/index.vue'),
    },
  ],
}

export default shader
