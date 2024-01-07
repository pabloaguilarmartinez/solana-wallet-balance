import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
      http: 'stream-http',
      https: 'https-browserify',
      crypto: 'crypto-browserify',
      os: 'os-browserify'
    }
  },
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      external: ["@particle-network/auth"]
    }
  }
})
