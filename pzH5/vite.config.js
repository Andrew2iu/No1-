import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // 服务器配置
  server: {
    port: 5500
  },

  // 构建配置
  build: {
    // 构建目标
    target: 'es2015',

    // 代码压缩
    minify: 'terser',

    // Terser压缩配置
    terserOptions: {
      compress: {
        drop_console: true, // 移除console
        drop_debugger: true // 移除debugger
      }
    },

    // 资源优化
    rollupOptions: {
      // 分割代码
      output: {
        // 静态资源分类
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/css/i.test(extType)) {
            extType = 'css';
          }
          return `assets/${extType}/[name]-[hash].[ext]`;
        },

        // 代码分割
        manualChunks: {
          // 第三方依赖
          vendor: ['vue', 'vue-router', 'axios'],
          // Vant组件库
          vant: ['vant'],
          // 工具函数
          utils: ['qrcode']
        }
      }
    }
  },

  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  // 插件配置
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
});
