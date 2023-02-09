const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-kelly-slab)', ...defaultTheme.fontFamily.serif],
      },
      height: {
        "page" : "100vh",
        "nav" : "4.5rem"
      },
      boxShadow: {
        "nav" : "0px 0.5px 5px #737373",
        "button" : "0px 3px 1px #9E9E9E;"
      },
      margin: {
        "bar" : "0.5px",
      },
      padding: {
        "page" : "4.5rem" 
      },
      backgroundColor: {
        "navBlur": "rgba(23, 23, 23, 0.8)",
      }
    },
  },
  plugins: [],
}
