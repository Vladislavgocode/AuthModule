import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   port: 3000,
  //   // https: true,
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://127.0.0.1:3001',
  //   //     changeOrigin: true
  //   //   },
  //   // }
  // },
})
