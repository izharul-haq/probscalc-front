module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pine: {
          '50':  '#F0F6F5',
          '100': '#D4F0F4',
          '200': '#A1E6E5',
          '300': '#67CBC6',
          '400': '#2CAB9E',
          '500': '#2D8883',
          '600': '#1B775E',
          '700': '#195B4A',
          '800': '#133E37',
          '900': '#0D2628', 
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
