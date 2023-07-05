const { fontFamily } = require("tailwindcss/defaultTheme");
const tsConfig = require("../tsconfig/base.json")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fitchle: {
          brand: "#6366f1",
          brand2: "#484CFA",
        },
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        quicksand: ["var(--font-quicksand)"],
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};