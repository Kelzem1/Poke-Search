/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card-black': '#474747',
      },
      fontFamily: {
        'Mulish' : ['Mulish', 'sans-serif']
      },
      backgroundColor: {
        'red': '#FF0000'
      }
    },
  },
  plugins: [],
}