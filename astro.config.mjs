import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Forcefully Static Mode
  output: 'static',

  // Hostinger ke liye important settings
  base: '/dev',
  site: 'https://dev.journalingtechniques.org/',

  build: {
    format: 'directory',
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