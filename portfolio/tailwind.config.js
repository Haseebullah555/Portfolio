/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // you had curly braces {} instead of [] for globbing
  ],
  theme: {
    extend: {
      screens:{
        sm: "350px",
        md: "810px",
        lg:"1024",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#0091b3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
      },
      boxShadow:{
        cyanShadow: "0px 0px 20px 0px rgba(94,206, 220, 0.5)"
      },
      fontFamily: {
        body: ["Josefin Sans", "sans-serif"],
        special: ["Roboto", "sans-serif"], // fixed typo Robato → Roboto
      },
    },
  },
  plugins: [],
}
