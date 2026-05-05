import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hostinger static hosting ke liye static output zaroori hai
  output: 'static',

  // Aapki domain aur subfolder settings
  base: '/dev',
  site: 'https://dev.journalingtechniques.org/',

  build: {
    format: 'directory',
  },

  // Environment variables ko register karna zaroori hai
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      GOOGLE_SITE_VERIFICATION: envField.string({ context: 'client', access: 'public', optional: true }),
      BING_SITE_VERIFICATION: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },

  integrations: [
    react(),
    mdx(),
    sitemap(),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
    }
  },
});