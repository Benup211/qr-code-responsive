/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mentor-white':'hsl(0, 0%, 100%)',
        'mentor-light-gray':'hsl(212, 45%, 89%)',
        'mentor-grayish-blue':' hsl(220, 15%, 55%)',
        'mentor-dark-blue':'hsl(218, 44%, 22%)',
      },
      fontFamily:{
        'outfit':['outfit','sans-serif']
      },
    },
  },
  plugins: [],
}