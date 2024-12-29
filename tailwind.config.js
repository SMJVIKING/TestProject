/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
       textColor: "#C9C4CE",

        current: "#F8F8F8",

        blue: {
          light: "#DFDCFE",
          dark: "#4737FF",
        },
        green: {
          light: "#D8F1D6",
          dark: "#208F17",
        },
        black: {
          light: "#D8D8DD",
          dark: "#000000",
        },

        orange: {
          light: "#FF2A2A",
          dark: "#FF2A2A",
          darkest: "#FF4500",
        },
        gray: {
          darkest: "#292D32",
          dark: "#727272",
          DEFAULT: "#c0ccda",
          light: "#969696",
          lightest: "#E1E1E1",
        },
        linear: {
          gray: "#606060",
          dark: "#262630",
        },
      },
    },
  },
  plugins: [],
};