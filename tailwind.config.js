/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        notoSerif: ['"Noto Serif Display"', "serif"],
      },
      backgroundImage: {
        "coffee-gradient":
          "linear-gradient(to bottom, rgb(87, 65, 43), rgb(213, 200, 160))",
        "custom-gradient":
          "linear-gradient(to right, rgb(168, 204, 211), rgb(149, 136, 117))",
      },
      colors: {
        coffee: "rgb(87, 65, 43)",
      },
      // Thêm phần animation và keyframes ở đây
      keyframes: {
        moveX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },
      },
      animation: {
        moveX: "moveX 4s ease-in-out infinite",
        "moveX-slow": "moveX 6s ease-in-out infinite",
        "moveX-fast": "moveX 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
