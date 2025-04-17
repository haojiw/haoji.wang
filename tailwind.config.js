/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F2',
        text: '#2F2F2F',
        muted: '#8A8A7C',
        accent: '#3F4B3B', //273b09
        brand: '#617129',
        border: '#dcd6cc',
      },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Lora', 'serif'],
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