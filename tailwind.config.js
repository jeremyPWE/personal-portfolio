/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        blink: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0 } },
      },
      animation: { blinking: "blink 1s ease-in-out infinite" },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
