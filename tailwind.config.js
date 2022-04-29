const colors = require( 'tailwindcss/colors' );

module.exports = {
  important: true,
  purge: {
    mode: 'layers',
    layers: [ 'utilities' ],
    content: [ './src/**/*.{ts,tsx}', './public/index.html' ],
  },
  darkMode: false,
  theme: {
    screens: {
      xs: '270px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      orange: colors.orange,
      gray: colors.gray,
      yellow: colors.yellow,
      green: colors.green,
      teal: colors.teal,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    extend: {
      colors: {
        'custom-twilight': "#A6B0C1",
        'custom-yellow': '#FFFF0E'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: [ 'disabled' ],
      textColor: [ 'disabled' ],
    },
  },
  plugins: [],
};
