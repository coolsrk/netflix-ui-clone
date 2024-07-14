/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        signInRed: '#E50915',
      },
      borderWidth: {
        textBoxes: '0.5px',
      }
    },
  },
  plugins: [],
}

