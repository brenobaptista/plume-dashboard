module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        spacing: 'margin, padding'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
