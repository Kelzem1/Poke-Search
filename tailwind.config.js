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
        'ballColor' : '#c93f3d'
      },
      fontFamily: {
        'Mulish' : ['Mulish', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        
      }
    },
  },
  plugins: [],
}