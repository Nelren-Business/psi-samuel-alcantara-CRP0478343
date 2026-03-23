import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arthursn1.github.io',
  base: '/psicologo-samuel',
  vite: {
    plugins: [tailwindcss()],
  },
});