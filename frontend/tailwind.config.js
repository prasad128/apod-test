module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2.5xl': ['1.600rem', '2rem']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
