import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease 0.5s forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.5)",
          },
          "10%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(2)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;