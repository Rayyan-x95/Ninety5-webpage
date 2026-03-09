import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/pages/about.html',
        studio: 'src/pages/studio.html',
        labs: 'src/pages/labs.html',
        marketing: 'src/pages/marketing.html',
        academy: 'src/pages/academy.html'
      }
    }
  }
});
