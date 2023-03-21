/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideInFromRight: "slideInFromRight 1.5s ease",
        slideInFromLeft: "slideInFromLeft 1.5s ease",
        slideInFromButtom: "slideInFromButtom 1s ease",
        slideAndScale: "slideAndScale 2s ease",
      },
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
      keyframes: {
        slideInFromRight: {
          "0%": {
            transform: "translateX(100%)",
            display: "none",
          },

          "99%": {
            display: "block",
          },

          "100%": {
            transfrom: "translateX(0)",
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            display: "none",
          },

          "99%": {
            display: "block",
          },

          "100%": {
            transfrom: "translateX(0)",
          },
        },
        slideInFromButtom: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideAndScale: {
          "0%": {
            transform: "translateY(-100%) scale(1.3)",
            // transform: "scale(1.3)",
          },
          "100%": {
            transform: "translateY(0)",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
