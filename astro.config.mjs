import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://journalingtechniques.org',

  build: {
    format: 'directory',
    assets: 'assets', // 👈 यह लाइन यहाँ जोड़ें (अंडरस्कोर हटाने के लिए)
  },

  env: {
    schema: {
      // General Site Config
      SITE_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      GOOGLE_SITE_VERIFICATION: envField.string({ context: 'client', access: 'public', optional: true }),
      BING_SITE_VERIFICATION: envField.string({ context: 'client', access: 'public', optional: true }),

      // Analytics & Tracking
      PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public', optional: true }),

      // Consent & Privacy (Fix for current error)
      PUBLIC_CONSENT_ENABLED: envField.boolean({ context: 'client', access: 'public', optional: true, default: false }),
      PUBLIC_PRIVACY_POLICY_URL: envField.string({ context: 'client', access: 'public', optional: true, default: '/privacy' }),

      // Other common template variables
      PUBLIC_GOOGLE_MAPS_API_KEY: envField.string({ context: 'client', access: 'public', optional: true, default: '' }),
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
    // 2. cssCodeSplit को हटा दिया ताकि एसेट्स डिफ़ॉल्ट रूप से सही तरीके से कंपाइल हों
  },
});