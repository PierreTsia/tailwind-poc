module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "regal-blue": {
          500: "#243c5a",
          700: "#192A3E",
          400: "#465464"
        }
      }
    }
  },
  variants: {
    extend: {
      borderColor: ["last", "dark"],
      opacity: ["disabled"],
      cursor: ["disabled"]
    }
  },
  plugins: []
};
