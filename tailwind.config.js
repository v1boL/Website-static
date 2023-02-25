/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
