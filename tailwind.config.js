module.exports = {
  purge: {
      content: ["/resources/views/*.blade.php","./resources/**/*.js", "/resources/js/**/*.vue"],
    },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
