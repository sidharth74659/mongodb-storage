const purge = process.env.NODE_ENV === 'development' ? false : true

console.log(process.env.NODE_ENV)

module.exports = {
  purge: {
    enabled: purge,
    content: [
      './public/*.html',
      './public/**/*.html',
      './public/**/*.js',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
