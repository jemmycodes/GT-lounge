/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "club-bg-splash-screen": "url('./assets/bar-bg.svg')",
      },
      colors: {
        bgBlack: "#121212",
        gold: "#EEC865",
        "lang-card-color": "#1e1e22;",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
