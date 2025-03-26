/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-background': 'var(--dark-shade-blue)',
        'light-green' : 'var(--light-green)',
      },
      fontSize: {
        'h1-xs': '17px',
        'h1-sm': '20px',
        'h1-md': '30px',
        'h1-lg': '40px',
      },
      container: {
        'center': true,
      }
    },
  },
  plugins: [],
}
//sm == min 640px
//md == min 768px
//lg == min 1024px
//xl == min 1280px
//2xl == min 1536px
