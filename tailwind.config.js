/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'new-ticket': '#10b981',
        'new-ticket-hover': '#059669',
      }
    },
  },
  plugins: [],
}