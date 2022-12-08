/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        spacing: 'margin, padding',
        dropdown: 'opacity, transform'
      },
      animation: {
        beat: 'beat 1s ease-out infinite'
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' }
        }
      },
      minHeight: {
        main: 'calc(100vh - 228px)'
      }
    }
  },
  plugins: []
}
