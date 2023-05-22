/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#4088CB",
      gray: {
        light: "#EDEDED",
        mid: " #A3A3A3",
      },
    },
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
      noto: ["Noto Sans", "sans-serif"],
    },
    extend: {},
  },
};
