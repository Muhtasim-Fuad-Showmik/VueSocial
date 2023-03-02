/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ef233c",
        "secondary": "#edf2f4",
        "distinct": "#8d99ae",
        "dark": "#2b2d42",
        "darkPrimary": "#d90429",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    }
  },
  plugins: [],
}
