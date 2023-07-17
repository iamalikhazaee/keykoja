/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '270px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
      },
      colors: {
        palletteOneFirst: '#1E6091',
        palletteOneSecond: '#1A759F',
        palletteOneThird: '#168AAD',
        palletteTwoFirst: '#3A5A40',
        palletteTwoSecond: '#588157',
        palletteTwoThird: '#A3B18A',
        palletteThreeFirst: '#C8B6FF',
        palletteThreeSecond: '#E7C6FF',
        palletteThreeThird: '#FFD6FF',
      }
    },
  },
  plugins: [],
}

