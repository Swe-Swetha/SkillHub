/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading:"#1F2937",
        text: "#4B5563",
      },
    },
  },
  plugins: [],
}