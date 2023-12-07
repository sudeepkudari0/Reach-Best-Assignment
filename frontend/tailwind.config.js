/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Great': ['"IM Fell Great Primer SC"', 'sans-serif'],
        'Nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

