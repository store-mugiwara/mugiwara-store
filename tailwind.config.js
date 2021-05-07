module.exports = {
  purge: {
      content: ["/resources/views/**/*.blade.php", "/resources/js/**/*.vue"],

      options: {
          safelist: ['bg-gray-200']
      }
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
