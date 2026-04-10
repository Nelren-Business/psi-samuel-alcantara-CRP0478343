import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samuelalcantara.com.br/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'always', 
  },

});