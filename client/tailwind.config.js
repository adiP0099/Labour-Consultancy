/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#1E40AF",
        background: "#F8FAFC",
        dark: "#0F172A",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};