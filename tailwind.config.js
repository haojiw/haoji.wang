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
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Georgia', 'serif'],
        chinese: ['Noto Serif SC', 'Georgia', 'serif'],
        serif2: ['Cormorant Garamond', 'serif'],
        sans2: ['Space Grotesk', 'sans-serif'],
        handwriting: ['Indie Flower', 'serif'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',
      },
    },
  },
  plugins: [],
} 
