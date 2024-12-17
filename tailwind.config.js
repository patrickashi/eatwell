/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to the fontFamily
        playfair: ['Playfair Display', 'serif'],
        sail: ['Sail', 'cursive'],
        carter: ['Carter One', 'sail'],
      },
    },
  },
  plugins: [],
}

