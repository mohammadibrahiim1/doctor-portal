/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
       {
        doctorThemes: {
          
          "primary": "#0152A8",
                   
          "secondary": "#19D3AE",
                   
          "accent": "#3A4256",
                   
          "neutral": "#3D4451",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#0072F5",
                   
          "success": "#21CA51",
                   
          "warning": "#FF6052",
                   
          "error": "#DE1B8D",
                   },
       }
     ]
  },
  theme: {
    extend: {
    
    },
  },
  plugins: [require("daisyui")],
}
