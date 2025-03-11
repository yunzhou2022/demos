import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    headers: {
    //   'Cache-Control': 'public, max-age=31536000',
    //   'ETag': 'x-cache-demo',
    //   'Last-Modified': 'Wed, 21 Oct 2024 07:28:00 GMT'
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    // 缓存验证演示配置
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    assetsInlineLimit: 4096
  }
})