/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './resources/js/**/*.{vue,js}',
    './resources/views/**/*.blade.php'
  ],
  theme: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/typography'),
  ],
}
