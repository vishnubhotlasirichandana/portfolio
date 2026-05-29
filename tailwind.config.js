/** @type {import('tailwindcss').Config} */

module.exports = {
  content:[
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],

  theme:{
    extend:{
      colors:{
        primary:"#00F5FF",
        secondary:"#7C3AED",
        dark:"#050816"
      },

      animation:{
        glow:'glow 3s ease infinite'
      },

      keyframes:{
        glow:{
          '0%,100%':{
            boxShadow:'0 0 15px #00F5FF'
          },

          '50%':{
            boxShadow:'0 0 35px #7C3AED'
          }
        }
      }
    }
  },

  plugins:[]
}