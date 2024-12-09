import { nextui } from "@nextui-org/react";
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0369A1",
      },
      screens: {
        // Tablet
        'md': '469px',

        // Laptop/Desktop
        'lg': '770px'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
})

