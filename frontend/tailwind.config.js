/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1a659e',
        'primary-dark': '#004E89',
        'primary-light': '#62BFED',
        'neutral': '#F4E9CD',
        'emphasize': '#FF6B35',
        'secondary': '#77ACA2',
      },
    },
  },
  plugins: [],
}

