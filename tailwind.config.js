/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(235, 70%, 60%)',
        softRed: 'hsl(0, 95%, 40%)',
        grayishBlue: 'hsl(230, 10%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({
        'dots': "url('../images/bg-dots.svg')",
      })
    },
  },
  plugins: [],
}

