import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/h5/example',
  server: {
    host: '127.0.0.1',
    port: 6006,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
    },
    target: 'es2015',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    VueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/var.scss" as *;
          @use "src/styles/mixin.scss" as *;
        `,
      },
    },
  },
});
