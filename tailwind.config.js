const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: "#2C71F9",
      secondary: colors.yellow,
      neutral: colors.gray,

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}