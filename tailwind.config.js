/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#2B8CC4",
        highlight: "#0096EC",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0 } },
        tiltShake: {
          "0% ": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },

      animation: {
        blinking: "blink 1s ease-in-out infinite",
        tiltShaking: "tiltShake 1s linear infinite",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
