/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../apps/**/src/**/*.{js,ts,jsx,tsx,mdx}", // 모든 앱의 src 폴더를 스캔
    "../../packages/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        Mobile:{ max: "425px" },
        Desk:"426px"
      },
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
