import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import {router} from '@/router'

console.log(import.meta.env);

createApp(App).use(router).mount('#app')
