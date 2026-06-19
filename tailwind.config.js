/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        brand: 'rgb(var(--color-brand) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        chinese: ['var(--font-chinese)', 'serif'],
        sans2: ['var(--font-sans-2)', 'sans-serif'],
        handwriting: ['var(--font-handwriting)', 'serif'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',
      },
    },
  },
  plugins: [],
} 
