/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F2',
        text: '#2F2F2F',  //#2F2F2F
        muted: '#8A8A7C',
        accent: '#3F4B3B',
        border: '#dcd6cc',
      },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Lora', 'serif'],
        serif2: ['Cormorant Garamond', 'serif'],
        sans2: ['Space Grotesk', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',
      },
    },
  },
  plugins: [],
} 