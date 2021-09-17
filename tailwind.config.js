module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#8dbdd8",
        light: "#f9fafb",
        darkLight: "#e8eaed",
      },
      height: {
        all: "calc(100vh - 80px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
