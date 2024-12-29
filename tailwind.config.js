module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust paths based on your project
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["'Roboto Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
