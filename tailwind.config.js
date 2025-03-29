const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
content: [
  "./src/**/*.{html,js,ts,jsx,tsx}",
  "./public/**/*.html",
  "./*.html"
],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          lighter: '#FAF7F3',
          light: '#323232',
          dark: '#1C2C3C',
          txt: '#252800',
        },
      },
    },
  },
  plugins: [],
}
