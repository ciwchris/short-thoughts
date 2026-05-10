/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ink: '#0E0E10',
        'ink-soft': '#73737A',
        'ink-softer': '#A0A0A6',
        rule: '#E8E8EB',
        'rule-soft': '#F0F0F2',
        accent: '#1B3FE0',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0E0E10',
            maxWidth: 'none',
            a: {
              color: '#1B3FE0',
              textUnderlineOffset: '2px',
              '&:hover': { opacity: '0.75' },
            },
            'h1, h2, h3, h4, h5, h6': { color: '#0E0E10' },
            blockquote: { color: '#73737A', borderLeftColor: '#E8E8EB' },
            hr: { borderColor: '#E8E8EB' },
            code: { color: '#0E0E10' },
            'pre, pre code': { color: '#0E0E10', backgroundColor: '#F0F0F2' },
          },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
