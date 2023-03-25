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
        slideToButtom: "slideToButtom 1s ease",
        slideOutToleft: "slideOutToleft 1s ease",
        slideOutToRight: "slideOutToRight 1s ease",
        fadeIn: "fadeIn 2.5s ease",
      },
      backgroundImage: {
        "club-bg-splash-screen": "url('./assets/bar-bg.svg')",
        "bar-bg": "url('./assets/bar.svg')",
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
            transform: "translate(100vw,-70%)",
          },
          "100%": {
            transform: "translate(55vw,-70%)",
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translate(-100vw,30%)",
          },
          "100%": {
            transform: "translate(5vw,30%)",
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
        slideToButtom: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        slideOutToleft: {
          "0%": {
            transform: "translate(5vw,30%)",
          },
          "100%": {
            transform: "translate(-100vw,30%)",
          },
        },
        slideOutToRight: {
          "0%": {
            transform: "translate(95vw,-70%)",
          },
          "100%": {
            transform: "translate(100vw,-70%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
