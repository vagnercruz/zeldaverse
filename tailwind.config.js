/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zelda: ['"Press Start 2P"', 'sans-serif'],
      },
      colors: {
        hyrule: "#1b2a41",
        triforce: "#ffcc00",
        forest: "#2d6a4f",
      },
    },
  },
  plugins: [],
};
