/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        disappear: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-2rem)" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/site-bg.jpg')",
      },
      fontFamily: {
        title: "Orbitron",
        list: "Aldrich",
        para: "Rajdhani",
      },
      animation: {
        disappear: "disappear 1s both",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
