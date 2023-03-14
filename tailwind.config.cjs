/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "splash-screen": "url('./assets/splash-screen-bg.webp')",
      },
      colors: {
        orange: "rgba(255, 104, 56, 1)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
