/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#f15e50",
        header: "#00001a",
        new: "#f15e50",
        paragraph: "#c5c6ce",
        main_bg: "#fffdfa",
        sec_bg: "#5d5f79",
      },
    },
  },
  plugins: [],
};
