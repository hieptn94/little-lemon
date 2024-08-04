/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        desktop: "980px",
      },
      colors: {
        "yellow-1": "rgba(244, 207, 20, 1)",
        "yellow-2": "rgba(249, 215, 83, 1)",
        "yellow-3": "rgba(251, 220, 111, 1)",
        "dark-green-1": "rgba(73, 94, 87, 1)",
        "dark-green-2": "rgba(98, 114, 107, 1)",
        "dark-green-3": "rgba(123, 134, 127, 1)",
      },
    },
  },
  plugins: [],
};
