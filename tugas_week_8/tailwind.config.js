/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        root : ['Cabin Condensed']
    },
    colors:{
      primary : '#f6f6f6',
      dark : '#1d1d1d'
    }
  },
  plugins: [],
}
}
