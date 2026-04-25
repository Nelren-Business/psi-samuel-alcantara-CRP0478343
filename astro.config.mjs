import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

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

  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});