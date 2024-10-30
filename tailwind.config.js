/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "rgba(17, 24, 39, 1)",
        available: "rgba(16, 185, 129, 1)",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      boxShadow: {
        rbShadow: "10px 10px 50px -12px rgba(1, 1, 1, 0.225);",
      },
    },
  },
  plugins: [],
};
