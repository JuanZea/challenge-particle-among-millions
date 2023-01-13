/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,vue}'],
  theme: {
    extend: {
      colors: {
        mustard: '#f8d561',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
