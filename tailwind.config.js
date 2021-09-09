module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
