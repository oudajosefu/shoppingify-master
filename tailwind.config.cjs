/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#FAFAFE',
        'background-dark': 'hsl(241, 22%, 15%)',
        'aside-light': 'hsl(0, 0%, 100%)',
        'aside-dark': 'hsl(241, 22%, 18%)',
        'primary-light': 'hsl(0, 0%, 27%)',
        'primary-dark': 'hsl(0, 0%, 90%)',
        'custom-orange': 'hsl(38, 95%, 51%)',
        'tooltip': 'hsl(0, 0%, 27%)',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'shopping-cart': '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
        'shopping-cart-dark': '0 1px 3px 0 rgb(60 64 67 / 80%), 0 4px 8px 3px rgb(60 64 67 / 65%)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
