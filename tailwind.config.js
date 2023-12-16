/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cardBlack': '#FF0000',
      },
      fontFamily: {
        'Mulish' : ['Mulish', 'sans-serif']
      },
      backgroundColor: {
        
      }
    },
  },
  plugins: [],
}