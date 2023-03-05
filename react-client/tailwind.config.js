/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "antiFlashWhite": "#edf2f4",
        "primary": "#ef233c",
        "primaryDark": "#d90429",
        "secondary": "#8d99ae",
        "secondaryDark": "#2b2d42",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    }
  },
  plugins: [],
}
