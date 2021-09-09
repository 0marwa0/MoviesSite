module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer-bg': 'rgba(13,17,23,255)',
        'footer-header': 'gray',
        'footer-link': 'rgba(193,196,187,255)',
        'footer-card': 'rgba(13,17,23,255)',
      },
    },
  },
  variants: {
    extend: {
      TextColor: ['active'],
    },
  },
  plugins: [],
};
