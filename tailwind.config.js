/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",              // main App entry
    "./screens/**/*.{js,jsx,ts,tsx}",     // all screen components
    "./components/**/*.{js,jsx,ts,tsx}"   // optional: all reusable components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // example custom color
        secondary: '#FACC15', // example custom color
        background: '#000000',
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['System'],     // default system font
      },
    },
  },
  plugins: [],
};
