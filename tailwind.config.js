/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: '#c9f31d'
      },
      fontfamily: {
        ubuntu: ['ubuntu sans','sans-serif']
      }
    },
  },
  plugins: [],
}