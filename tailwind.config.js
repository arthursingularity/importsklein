/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medium: ['SF Pro Medium'],
        light: ['SF Pro Light'],
        thin: ['SF Pro Thin'],
        semibold: ['SF Pro Semibold'],
        regular: ['SF Pro Regular'],
      },
      colors: {
        'dark-bg': '#16171B',
        'verde': '#33DE9A',
        'vermelho': '#f6465d',
        'dark-bg-2': '#22262C',
        'dark-bg-3': '#313740',
        'dark-bg-4': '#49525F',
        'borderColor': '#4b5563',
        'verde': '#33DE9A',
      },
    },
  },
  plugins: [],
}