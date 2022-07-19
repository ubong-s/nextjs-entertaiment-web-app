/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            themeRed: 'hsl(0, 97%, 63%)',
            themeBlack: 'hsl(223, 30%, 9%)',
            themeBlue: 'hsl(223, 23%, 46%)',
            themeBlueDark: 'hsl(223, 36%, 14%)',
            themeGrey: '#CACACA',
         },
         fontFamily: {
            outfit: ['"Outfit"', 'sans-serif'],
         },
         height: {
            '90vh': '90vh',
         },
      },
   },
   plugins: [],
};
