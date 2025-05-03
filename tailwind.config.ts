
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9b87f5",
          dark: "#7E69AB",
        },
        secondary: "#6E59A5",
        background: "#F1F0FB",
        foreground: "#1A1F2C",
        muted: "#F2FCE2",
        accent: "#D6BCFA",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
