/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1a659e',
        'primary-dark': '#004E89',
        'primary-light': '#00A5E0',
        'neutral': '#EFEFD0',
        'emphasize': '#FF6B35',
        'emphasize-light': '#F7C59F',
      },
    },
  },
  plugins: [],
}

