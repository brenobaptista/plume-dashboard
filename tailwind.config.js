const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
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
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
