/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: "#703BF7",
        main_color_darker: "#5426cb",
        main_bg_color: "#FCFCFE",
        gray_color: "#999999",
      },
      container: {
        margin: "auto",
        center: true,
      },
      screens: {
        sm: { max: "767px" },
      },
      fontFamily: {
        Urbanist: "Urbanist",
      },
      boxShadow: {

        'cardShadow': '0px 0px 5.3px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}