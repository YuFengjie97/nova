import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { loadEnv } from 'vite';

const CWD = process.cwd(); // 获取当前文件的绝对路径

export default defineConfig(({ command, mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    plugins: [vue()],
    // base: import.meta.env.VITE_BASE_URL, // import.meta是浏览器（客户端）使用的，你个呆瓜
    // base: process.env.NODE_ENV === 'production' ? '/nova/' : '/', // 这样是可以的
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@public': resolve(__dirname, 'public')
      }
    },
    server: {
      host: 'localhost',
      port: 8080,
      open: false
    },
    build: {
      outDir: './docs'
    }
  }
})
