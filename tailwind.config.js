/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "24px",
      },
      colors: {
        primary: {
          5: "#035E57",
          4: "#017E75",
          3: "#3EA799",
          2: "#7CC1BC",
          1: "#E7F6F6",
        },
        neutral: {
          5: "#131313",
          4: "#2B2828",
          3: "#616161",
          2: "#D0D0D0",
          1: "#FBFBFB",
        },
      }
    },
  },
  plugins: [],
}