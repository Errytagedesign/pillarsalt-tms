/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pryColor: '#076a39',
        secColor: '#7fd159',
        white: '#fff',
        black: '#080a09',
        Grey1: '#393b3a',
        Grey2: '#8d8e8e',
        Grey3: '#bdc0ce',
        Grey4: '#E6E6E6',
        Grey5: '#bcbcbd',
        Grey6: '#7e8494',
        Line: '#e5e7ef',
        rated: '#be9122',
        positive: '#20af0b',
        negative: '#ff3b2d',
        receiver: '#eeeff2',
        sender: '#3b70fb',
      },
      fontFamily: {
        monaSans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
