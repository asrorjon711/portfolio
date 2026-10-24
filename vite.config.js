import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        asosiy: resolve(import.meta.dirname, 'asosiy.html'),
        about: resolve(import.meta.dirname, 'men-haqimda.html'),
        contact: resolve(import.meta.dirname, 'kontakt.html'),
      },
    },
  },
});