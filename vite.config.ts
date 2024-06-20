import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { rawMdx } from './plugins/vite-plugin-raw.mdx'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rawMdx(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/icons/**/*',
          dest: 'assets/icons'
        },
        {
          src: 'src/assets/sounds/**/*',
          dest: 'assets/sounds'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  publicDir: false,
  server: {
    open: '/example/index.html'
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactPrettyCode',
      fileName: (format) => `react-pretty-code.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: {
        main: path.resolve(__dirname, 'src/index.ts')
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        exports: 'named'
      }
    },
    emptyOutDir: false
  }
})
