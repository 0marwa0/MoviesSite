module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer-bg': '#1D8C7F',
        'footer-header': '#14EFD5',
        'footer-link': '#1D8C7F',
        'footer-card': '#E6F9F6',
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
