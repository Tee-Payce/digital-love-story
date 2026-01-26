const { li } = require('framer-motion/client')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        goldmd: "#bfa130",
        goldstr: "#6c5c1f",
        graydark: "#121212",
        graylight: "#2c2c2c",
        graymd: "#3a3a3a",
        graysoft: "#444444",
        light: "#1a1a1a",
        blacklux: "#0b0b0b"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}

