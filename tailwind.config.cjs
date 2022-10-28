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
        'primary-dark': 'hsl(0, 0%, 85%)',
        'custom-orange': 'hsl(38, 95%, 51%)',
        'tooltip': 'hsl(0, 0%, 27%)',
        'plus': 'hsl(240, 2%, 76%)',
        'shopping-list-light': 'hsl(34, 93%, 93%)',
        'shopping-list-dark': 'hsl(241, 22%, 30%)',
        'shopping-list-text-light': 'hsl(250, 6%, 21%)',
        'shopping-list-text-dark': 'hsl(250, 6%, 85%)',
        'shopping-list-banner': 'hsl(340, 28%, 39%)',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'shopping-cart': '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
        'shopping-cart-dark': '0 1px 3px 0 rgb(60 64 67 / 80%), 0 4px 8px 3px rgb(60 64 67 / 65%)',
        'item-card': '0px 2px 12px 0px #0000000D'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
