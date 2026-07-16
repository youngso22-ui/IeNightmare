/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nightmareBlue: "#00C2FF",
        nightmareBlack: "#050505",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,194,255,.45)",
      },
      animation: {
        smoke: "smokeMove 12s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        smokeMove: {
          "0%": {
            transform: "translateX(-40px) translateY(0px)",
            opacity: ".25",
          },
          "50%": {
            transform: "translateX(40px) translateY(-20px)",
            opacity: ".5",
          },
          "100%": {
            transform: "translateX(-40px) translateY(0px)",
            opacity: ".25",
          },
        },
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};