/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dcpca: {
          bg: '#0A0812',
          card: '#141124',
          terracotta: '#D9532F',
          gold: '#E5A93C',
          goldLight: '#FBE8A6',
          crimson: '#9B1B30',
          accent: '#FF7A45',
          border: 'rgba(229, 169, 60, 0.2)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cinzel"', 'Georgia', 'serif'],
        bengali: ['"Noto Serif Bengali"', '"Hind Siliguri"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
