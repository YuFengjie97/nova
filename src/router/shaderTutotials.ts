import type { RouteRecordRaw } from 'vue-router'
import AppVue from '@/App.vue'

const shader: RouteRecordRaw = {
  path: '/shader-toturial',
  meta: {
    name: 'ShaderToturial',
    des: '',
  },
  component: AppVue,
  children: [
    {
      path: 'smile-face',
      meta: { name: '笑脸-easy', visable: true, type: 'shader' },
      component: () => import('@/views/shaderToturials/smile_face/index.vue'),
    },
    {
      path: 'band',
      meta: { name: 'band', visable: true, type: 'shader' },
      component: () => import('@/views/shaderToturials/band/index.vue'),
    },
    {
      path: 'smile-face-2',
      meta: { name: '笑脸-hard', visable: true, type: 'shader' },
      component: () => import('@/views/shaderToturials/smile_face_2/index.vue'),
    },
    {
      path: 'smile-face-anime',
      meta: { name: '笑脸-动画', visable: true, type: 'shader' },
      component: () => import('@/views/shaderToturials/smile_face_anime/index.vue'),
    },
  ],
}

export default shader
