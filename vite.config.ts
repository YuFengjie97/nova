import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  // base: import.meta.env.VITE_BASE_URL, // import.meta是浏览器（客户端）使用的，你个呆瓜
  base: process.env.NODE_ENV === 'production' ? '/nova/' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@public': resolve(__dirname, 'public')
    }
  },
  server: {
    host: 'localhost',
    port: 8080,
    open: true
  },
  build: {
    outDir: './docs'
  }
})
