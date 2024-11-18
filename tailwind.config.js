/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // Root HTML files
    "./src/**/*.{html,js}", // Your source folder (if you have one)
    "./Tailwind/**/*.{html,js}", // Adjust based on your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
