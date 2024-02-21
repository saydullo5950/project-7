/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"inter"', "sans-serif"],
      },
      colors: {
        brend: {
          primary: {
            "900": "#42307D",
            "700": "#6941C6",
            "600": "#7F56D9",
            "100": "#F4EBFF",
            "50": "#F9F5FF"
          }
        }
      }
    },
  },
  plugins: [],
}

