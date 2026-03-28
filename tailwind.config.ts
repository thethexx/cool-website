import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          red: "#9B1C1C",
          black: "#0A0A0A",
          ivory: "#FAF9F6",
          gold: "#D4AF77"
        }
      },
      boxShadow: {
        gold: "0 10px 30px rgba(212, 175, 119, 0.15)"
      },
      backgroundImage: {
        "luxury-gradient":
          "radial-gradient(circle at top, rgba(212,175,119,0.18), rgba(10,10,10,0.95) 60%)"
      }
    }
  },
  plugins: []
};

export default config;
