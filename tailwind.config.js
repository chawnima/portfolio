/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': "rgba(var(--primary))",
        'secondary': "rgba(var(--secondary))",
      },
      animation:{
        'pulse': "pulse 400ms cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    },
  },
  plugins: [],
};
