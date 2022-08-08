/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-tile-2",
    "bg-tile-4",
    "bg-tile-8",
    "bg-tile-16",
    "bg-tile-32",
    "bg-tile-64",
    "bg-tile-128",
    "bg-tile-above",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-7",
    "grid-rows-3",
    "grid-rows-4",
    "grid-rows-7",
  ],
  theme: {
    colors: {
      white: "rgb(255 255 255)",
      board: "#bbada0",
      background: "#faf8ef",
      newgame: "#8f7a66",
      cell: "rgba(238, 228, 218, 0.35)",
      number: {
        dark: "#776e65",
        light: "#f9f6f2",
      },
      tile: {
        2: "#eee4da",
        4: "#eee1c9",
        8: "#f3b27a",
        16: "#f69664",
        32: "#f77c5f",
        64: "#f75f3b",
        128: "#edd073",
        above: "#edcc62",
      },
    },
    extend: {},
    fontFamily: {
      clearsans: ["Clear Sans", "Helvetica Neue", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
