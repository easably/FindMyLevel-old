const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        green: colors.green,
        grayCool: "#393B46",
        black: "#191A1F"
      }
    }
  },
  variants: {},
  plugins: []
}
