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
        'violetDark' : '#130024'
      },
      fontFamily: {
        'Mulish' : ['Mulish', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        
      },
     
  },
  plugins: [],
}}