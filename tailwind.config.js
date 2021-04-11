const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  purge: [
    './components/**/*.js',
    './pages/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          ...defaultTheme.colors.green,
          terminal: "#0f0",
        }
      },
      fontFamily: {
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
      }
    }
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ]
};
