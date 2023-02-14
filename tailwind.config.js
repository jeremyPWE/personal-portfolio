/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // For small screens (mobile)
        1: "repeat(1, minmax(0, 1fr))",
        // For medium screens (tablets)
        2: "repeat(2, minmax(0, 1fr))",
        // For large screens (desktops)
        3: "repeat(3, minmax(0, 1fr))",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0 } },
      },
      animation: { blinking: "blink 1s ease-in-out infinite" },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
