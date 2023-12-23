/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        number: ['Carrois Gothic', ' sans-serif'],
      },
      colors: {
        primary: '#009AD9',
        secondary: '#009AD9',
        dark: '#817679',
        light: '#fff',
      },
      fontSize: {
        '20xl': '7rem',
      },
      container: {
        center: true,

        screens: {
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
};
