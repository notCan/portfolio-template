const colors = require('./colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        info: colors.info,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
        white: colors.white,
        black: colors.black,
      },
    },
  },
  plugins: [],
}
