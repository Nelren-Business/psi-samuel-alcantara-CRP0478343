import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://Nelren-Business.github.io',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'always', 
  },

  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'], // Permite que o GTM rastreie eventos
      },
    }),
  ],
});