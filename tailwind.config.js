/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        desktop: "980px",
      },
      colors: {
        "primary-yellow": "#f4ce14",
        "primary-dark-green": "#495e57",
      },
    },
  },
  plugins: [],
};
