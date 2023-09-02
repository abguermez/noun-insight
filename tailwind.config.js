/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        rubik : ["Rubik", "sans-serif"]
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "70%": {
            width: "50%"
          },
          "100%": {
            width: "50%",
            visibility: "visible"
          }
        },
        typing_phone: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "70%": {
            width: "100%"
          },
          "100%": {
            width: "100%",
            visibility: "visible"
          }
        },
        blink: {
          "0%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "#407BFF"
          }  
        }
      },
      animation: {
        typing: "typing 4s steps(40)  infinite alternate, blink 1s infinite",
        typing_phone: "typing_phone 4s steps(40)  infinite alternate, blink 1s infinite"
      }
    },
    plugins: [],
  },
};
