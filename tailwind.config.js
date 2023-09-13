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
        fundo: "#06203c",
      },
      fontSize: {
        xsm: "0.5rem",
        xxxl: "11rem",
      },
      spacing: {
        w128: "32rem",
      },
      height: {
        h128: "32rem",
      },
      backgroundImage: {
        "header-pattern": "url('/src/assets/header_background.png')",
        "business-patern": "url('/src/assets/business_background.png')",
        "contact-patern": "url('/src/assets/contact_background.png')",
      },
    },
  },
  plugins: [],
};

// Fonts: Montserrat, Fira Sans, Playfair Display
// Cores: Fundo - #06203c , Azul Claro - #3ebeb8, Degradê - Azul #3ebeb8 Roxo #8d3ef6
