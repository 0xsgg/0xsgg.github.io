/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-nunito-sans)",
          "var(--font-noto-sans-sc)",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        "text-primary": "var(--text-primary)",
        "text-primary-hover": "var(--text-primary-hover)",
        "text-secondary": "var(--text-secondary)",
        "text-secondary-hover": "var(--text-secondary-hover)",
      },
      fontSize: {
        "10xl": "10rem", // 自定义 10 倍超大字体
        md: "1rem",
        tiny: "0.625rem", // 自定义极小字体
      },
      textUnderlineOffset: {
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
      },
      // keyframes: {
      //   "slide-enter": {
      //     "0%": {
      //       opacity: "0",
      //       transform: "translateY(1rem)",
      //     },
      //     "100%": {
      //       opacity: "1",
      //       transform: "translateY(0)",
      //     },
      //   },
      // },
      // animation: {
      //   "slide-enter":
      //     "slide-enter 0.8s ease-out forwards var(--slide-delay, 0s)",
      // },
    },
  },
  plugins: [heroui()],
};
