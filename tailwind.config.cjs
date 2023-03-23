/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideInFromRight: "slideInFromRight 1s ease",
        slideInFromLeft: "slideInFromLeft 1s ease",
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
        "menu-bg": " rgba(78,78,97,0.2);",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideInFromRight: {
          "0%": {
            transform: "translate(100%,-50%)",
            position: "absolute",
            top: "50%",
          },
          "100%": {
            transform: "translate(-5%,-50%)",
            position: "absolute",
            top: "50%",
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translate(-150%,-50%)",
            position: "absolute",
            top: "50%",
          },
          "100%": {
            transform: "translate(-95%,-50%)",
            position: "absolute",
            top: "50%",
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
          },
          "100%": {
            transform: "translateY(0)",
            transform: "scale(1)",
          },
        },
        growingLightBlur: {
          "0%": {
            width: "0px",
            height: "0px",
          },
          "100px": {
            width: "300px",
            height: "220px",
          },
        },
      },
    },
  },
  plugins: [],
};
