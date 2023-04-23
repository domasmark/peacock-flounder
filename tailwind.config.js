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
          '1t': '#D8D7DB',
          '2t': '#CDCCD1',
          '3t': '#C2C2C7',
          '4t': '#B2B2B9',
          '5t': '#9F9EA8',
          '6t': '#8B8A95',
          '7t': '#777683',
          '8t': '#63626D',
          '9t': '#4E4E57',
          DEFAULT: '#3F3F46',
          '1s': '#323238',
          '2s': '#29292D',
          '3s': '#212124',
          '4s': '#1A1A1D',
          '5s': '#151517',
        },
        cobalt: {
          '1t': '#E2E2FD',
          '2t': '#D1D2FC',
          '3t': '#BDC1FA',
          '4t': '#A8AEF9',
          '5t': '#8F9BF7',
          '6t': '#7588F5',
          '7t': '#5875F3',
          '8t': '#3B62F1',
          '9t': '#1D52EF',
          DEFAULT: '#1047EA',
          '1s': '#0A39C7',
          '2s': '#082E96',
          '3s': '#06246F',
          '4s': '#041C52',
          '5s': '#041844',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'title-largest': ['3rem', {
          lineHeight: '3.75rem',
          letterSpacing: '0.01em',
          fontWeight: '700',
        }],
        'title-larger': ['2.25rem', {
          lineHeight: '2.75rem',
          letterSpacing: '0.01em',
          fontWeight: '700',
        }],
        'title-large': ['1.75rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.01em',
          fontWeight: '700',
        }],
        title: ['1.25rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0.01em',
          fontWeight: '700',
        }],
        'title-small': ['1rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0.02em',
          fontWeight: '500',
        }],
        'title-tiny': ['0.75rem', {
          lineHeight: '1.25rem',
          letterSpacing: '0.03em',
          fontWeight: '700',
        }],
        'base': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.01em',
          fontWeight: '400',
        }],
        'sm': ['0.75rem', {
          lineHeight: '1.25rem',
          letterSpacing: '0.02em',
          fontWeight: '400',
        }],

      },
    },
  },
  plugins: [],
};
