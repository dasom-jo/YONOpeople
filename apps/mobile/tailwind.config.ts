/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#DFF5FC',
        clickbtn:"#0083AF",
        basicbtn:'#71C4E0',
        clickgray:"#D9D9D9",
        basicgray:"#F6F5F5",
      },
    },
  },
  plugins: [],
};
