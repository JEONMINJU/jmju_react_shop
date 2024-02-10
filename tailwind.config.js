/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#064E3B',
      },
      backgroundImage: {
        banner: `url('../public/images/backpacking.jpeg')`
      },
    },
  },
  plugins: [],
}

