/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 0px 40px 0px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'mountain': "url('/assets/mountain.jpg')"
      }
    },
  },
  plugins: [],
}

