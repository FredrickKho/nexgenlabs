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

        'h2-xs': '15px',
        'h2-sm': '20px',
        'h2-md': '30px',
        'h2-lg': '45px',

        'h3-xs': '10px',
        'h3-sm': '15px',
        'h3-md': '15px',
        'h3-lg': '25px',

        'h4-xs': '7px',
        'h4-sm': '10px',
        'h4-md': '15px',
        'h4-lg': '25px',

        'p-xs': '5px',
        'p-sm': '7px',
        'p-md': '10px',
        'p-lg': '15px',
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
