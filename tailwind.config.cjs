/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  prefix: "tw-",
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        jd1: {
          ocean: {
            50: "#ebf1fb",
            100: "#dae6f9",
            200: "#b4cef3",
            300: "#89b7ed",
            400: "#58a0e4",
            500: "#4a88c3",
            600: "#3c70a2",
            700: "#2f5a83",
            800: "#224465",
            900: "#163048",
            950: "#102539"
          },
          sky: {
            50: "#e8f2ff",
            100: "#d5e7fe",
            200: "#a2cdfd",
            300: "#66b7fc",
            400: "#1fa0ee",
            500: "#1886c8",
            600: "#116ba1",
            700: "#0a4f79",
            800: "#053553",
            900: "#021f34",
            950: "#011221"
          }
        },
        neutral: {
          0: "#ffffff",
          50: "#f4f4f6",
          100: "#e6e7ea",
          200: "#cfd1d8",
          300: "#b6b9c4",
          400: "#9ca1af",
          500: "#858a9c",
          600: "#676c7f",
          700: "#4e5260",
          800: "#353741",
          900: "#191a1f",
          950: "#0e0e11"
        }
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      },
      boxShadow: {
        jd1: "0 16px 40px rgba(2, 31, 52, 0.08)"
      }
    }
  }
};
