/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "winter",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
