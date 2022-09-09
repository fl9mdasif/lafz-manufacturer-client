/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': '#ff57ac',
      'base1': '#912059',
      'body': '#fefbfd',
      'white': '#fff',
      'red': '#cc3535',
      'blue': '#3535ca',
      'black': '#111111',
      'gold': '#fdda1b',
      'green': '#28892c'
    },
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],

}