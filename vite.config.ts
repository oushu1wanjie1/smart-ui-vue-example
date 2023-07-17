import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import { modifyVars } from './src/smart-ui-vue/constant'
import { svgBuilder } from './svg-builder'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/smart-ui-vue/assets/icons/', '', (filePath, name) => {
      const newPath = filePath.split(path.sep).join('/')
      let svgname = newPath.substring(newPath.indexOf('icons/')).replace('icons/', 'smart-ui/')
      svgname = svgname + name.replace('.svg', '')
      return svgname
    }),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ]
    })
  ],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: modifyVars,
        javascriptEnabled: true
      }
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'SmartUi',
      fileName: (format) => `smart-ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
