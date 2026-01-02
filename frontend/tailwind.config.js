import forms from "@tailwindcss/forms";

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
      sans: ["Inter", "system-ui", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        "input-bg": "bg-gray-900",
      },
      keyframes: {
        "slide-and-back": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        "slide-and-back": "slide-and-back 2s ease-in-out infinite",
      },
    },
  },
  plugins: [forms],
};
