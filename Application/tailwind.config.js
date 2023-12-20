/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "calm-white": "#F8F8FF",
        "calm-blue": "#EBEEFF",
        primary: {
          50: "#D3EAE8",
          100: "#A0B8FF",
          200: "#BDD3FF",
          300: "#B3CAFF",
          400: "#7EA4FF",
          500: "#96AFFF",
          600: "#6E8CF6",
          700: "#2A5ABD",
          800: "#456BD1",
          900: "#044CAC"
        }
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#044CAC",
          secondary: "#FF826F",
          accent: "#37CDBE",
          neutral: "#044CAC",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
