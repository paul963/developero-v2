import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // Remove for Cloudfare
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
  // Remove for Cloudfare
})