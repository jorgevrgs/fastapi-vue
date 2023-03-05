import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig((env) => {
  console.log('env', env)
  return {
    plugins: [splitVendorChunkPlugin(), vue()],
    base: env.command === 'build' ? '/static' : '',
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js'
      }
    }
  }
})
