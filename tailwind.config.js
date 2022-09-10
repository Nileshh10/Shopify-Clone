/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1256px'
  },
    extend: {
      colors: {
        ui01: '#008060',
        btnHover: '#004c3f',
        section01Bg: '#fbf7ed',
        section02Bg: '#004c3f',
        section04Bg: '#f3fcf4',
        section06Bg: '#002e25',
        section07Bg: '#fbf7ed',
        footerBg: '#002e25',
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}
