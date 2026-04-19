import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samuelalcantara.com.br/',
  output: 'static',

  build: {
    inlineStylesheets: 'always', 
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp', // Sharp é o padrão ouro de performance
    },
  },

});