/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", //\    "../../packages/ui/**/*.{js,ts,jsx,tsx}", /

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
