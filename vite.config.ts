import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { rawMdx } from './plugins/vite-plugin-raw.mdx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), rawMdx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: '/example/index.html'
  }
})
