/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sea: {
          light: '#67e8f9',
          DEFAULT: '#0ea5e9',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [],
}
