import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/nova/',
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
