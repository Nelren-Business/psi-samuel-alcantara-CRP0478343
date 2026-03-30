import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Nelren-Business.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always', 
  },
});