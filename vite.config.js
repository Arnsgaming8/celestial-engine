import { defineConfig } from 'vite';

export default defineConfig({
  base: '/celestial-engine/',
  build: {
    outDir: 'dist'
  },
  server: {
    host: true,
    port: 3000
  }
});
