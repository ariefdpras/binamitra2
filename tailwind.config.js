/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: { primary: "#F8FAFC", secondary: "#FFE31A", dark: "#3C3D37" },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
