export default {
  content: ["./themes/wyld/layouts/**/*.html", "./content/**/*.md", "./themes/wyld/assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Iowan Old Style", "Palatino Linotype", "URW Palladio L", "P052", "serif"],
        sans: [
          "Bahnschrift",
          "DIN Alternate",
          "Franklin Gothic Medium",
          "Nimbus Sans Narrow",
          "sans-serif-condensed",
          "sans-serif",
        ],
      },
    },
  },
};
