/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // यह डार्क मोड के लिए सबसे ज़रूरी लाइन है
  theme: {
    extend: {
      // यहाँ आप अपनी पसंद के कलर्स या फोंट्स जोड़ सकते हैं
    },
  },
  plugins: [],
}