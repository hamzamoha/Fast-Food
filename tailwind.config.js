/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Signika', 'Arial', 'sans-serif'],
      'chalck': ['CHAWP'],
      'poppins': "Poppins"
    }
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
  darkMode: 'class',
}

