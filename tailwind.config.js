/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '426px',
      'md': '650px',
      'lg': '850px',
      'xl': '1024px',
      'xxl': '1440px'
    },
    colors: {
      'dark-blue': '#1A3B58',
      'gray': '#999999',
      'gray-blue': '#1A3B5854',
      'green': '#329C89',
      'hovgreen': '#309590' ,
      'line': '#4091DF1F',
      'border': '#CBDBEA',
      'ph': '#B7C0C9',
      'error': '#F65B2A',
      'text': '#212121',
      'text2': '#9A9A9A'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      borderRadius: {
        '4xl': '65px',
      }
    },
  },
  plugins: [],
}