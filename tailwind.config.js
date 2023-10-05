/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'near-blue': 'rgba(52,86,113,255)'
      }
    },
  },
  plugins: [],
}
