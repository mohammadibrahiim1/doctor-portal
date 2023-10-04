/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorThemes: {
          primary: "#0152A8",

          secondary: "#0FE3AF",

          accent: "#3A4256",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#0072F5",

          success: "#21CA51",

          warning: "#FF6052",

          error: "#DE1B8D",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
});
