import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { router } from '@/router'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

createApp(App).use(router).mount('#app')
