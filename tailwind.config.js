// const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ferrum: {
          'tint-1': '#D8D7DB',
          'tint-2': '#CDCCD1',
          'tint-3': '#C2C2C7',
          'tint-4': '#B2B2B9',
          'tint-5': '#9F9EA8',
          'tint-6': '#8B8A95',
          'tint-7': '#777683',
          'tint-8': '#63626D',
          'tint-9': '#4E4E57',
          DEFAULT: '#3F3F46',
          'shade-1': '#323238',
          'shade-2': '#29292D',
          'shade-3': '#212124',
          'shade-4': '#1A1A1D',
          'shade-5': '#151517',
        },
        cobalt: {
          'tint-1': '#E2E2FD',
          'tint-2': '#D1D2FC',
          'tint-3': '#BDC1FA',
          'tint-4': '#A8AEF9',
          'tint-5': '#8F9BF7',
          'tint-6': '#7588F5',
          'tint-7': '#5875F3',
          'tint-8': '#3B62F1',
          'tint-9': '#1D52EF',
          DEFAULT: '#1047EA',
          'shade-1': '#0A39C7',
          'shade-2': '#082E96',
          'shade-3': '#06246F',
          'shade-4': '#041C52',
          'shade-5': '#041844',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
