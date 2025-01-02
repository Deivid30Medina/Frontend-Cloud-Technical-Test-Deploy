/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-font": "#6a7ecd",
        "color-new" : "#5c70be"
      },
      fontFamily: {
        serif: ["Montserrat", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
