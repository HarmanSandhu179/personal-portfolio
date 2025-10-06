/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // add your new modern font here
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
