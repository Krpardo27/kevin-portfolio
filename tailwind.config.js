/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ["Merriweather", "sans-serif"],
      secondary: ["Lato", "serif"],
    },
    extend: {
      animation: {
        "slide-and-back": "slide-and-back 2s ease-in-out infinite",
      },
      keyframes: {
        "slide-and-back": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
