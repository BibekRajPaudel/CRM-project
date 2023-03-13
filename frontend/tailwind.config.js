/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: {
          'blue': '#2B7FFF',
          'lightblue': '#2266D1',
          'black': '#1C1B1F',
          'gray': '#D9D9D9',
        },
      
        secondary: {
          'red': '#C53030',
          'teal': '#00BAB0',
          'orange': '#ED8936',
        }
      },
      fontSize: {
        heading: '24px',
        subHeading: '18px',
        body: '16px',
        subbody1: '14px',
        subbody2: '12px',
      },
    },
  },
  plugins: [],
}
