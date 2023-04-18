/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      "logoColor":"#00B8D1",
      "textColor":"#38ADEF",
      "buttonColor":"#38ADEF",
      "white":"#fff",
      "gray":"#B6B6B6",
      "background":" #F5F5F5",
      "borderInput":"#F3F3F3"
    },
    fontFamily:{
      Noto:['Noto Sans Lao']
    }
  },
  plugins: [],
}