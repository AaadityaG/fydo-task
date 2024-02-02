/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      fydo: ["Ubuntu", "sans-serif"],
      theme: ["Inter", "sans-serif"]
    },
  },
  plugins: [],
}

