/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        firasans: ["Fira Sans"],
        playfair: ["Playfair Display"],
      },
      colors: {
        azulclaro: "#3ebeb8",
      },
      fontSize: {
        xsm: "0.5rem",
        xxxl: "11rem",
      },
      spacing: {
        w128: "32rem",
      },
    },
  },
  plugins: [],
};

// Fonts: Montserrat, Fira Sans, Playfair Display
// Cores: Fundo - #06203c , Azul Claro - #3ebeb8, Degradê - Azul #3ebeb8 Roxo #8d3ef6
