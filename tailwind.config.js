/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient( rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('../dist/img/herobg.jpg')",
        
      },


      fontFamily: {
        'opensans': ['"Josefin Sans"','sans-serif'],
       'titillium': ['"Titillium Web"','sans-serif'],
      },
    },
  },
  plugins: [],
}