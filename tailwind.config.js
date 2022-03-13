module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "blue-dark": "#172339",
      "blue-light": "#49566D",
      cream: "#F3EDE7",
      white: "#FAF8F6",
      purple: "#A060FF",
      pink: "#CB30E3",
      orange: "#FFA84E",
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: { max: "622px" },
        sm: { max: "828px" },
        md: { max: "927px" },
        lg: { max: "1145px" },
        xl: { max: "1155px" },
      },
      width: {
        bk: "",
      },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
