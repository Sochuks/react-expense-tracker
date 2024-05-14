/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Screen Sizes
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // Portfolio Color Scheme
      colors:{
        bgColor: '#e15554',
        primaryColor: '#4d9de0',
        secColor: '#e1bc29',
        successColor: '#3bb273',
        whiteColor: 'rgb(2555, 255, 255)',
        darkColor: '#333',
      },
      // Bakground Images
      backgroundImage: {
        'calcBackground': "url('./assets/calculator-bg.jpg')"
      }
    },
  },
  plugins: [],
}

