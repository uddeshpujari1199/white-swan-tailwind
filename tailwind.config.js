/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        "dark-purpule":"#d0e0e0",
        "light-white":"rgba(255,255,255,0.17)",
        "Active":"#E99B66",
      }
    },
  },
  plugins: [],
}

