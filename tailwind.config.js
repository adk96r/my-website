const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        appear: "appear 4s ease-in-out",
        wiggle: "wiggle 2s infinite",
        "side-to-side": "side-to-side 2.5s ease-out infinite 1s",
      },
      keyframes: {
        appear: {
          "0%": {
            top: "translateY(0px)",
            opacity: 0,
          },
          "15%, 100%": {
            transform: "translateY(-10px)",
            opacity: 1,
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "side-to-side": {
          "0%, 15%": {
            transform: "translateX(16px)",
            opacity: 0,
            scale: "1.5",
          },
          "20%": { transform: "translateX(16px)", opacity: 1, scale: "1.2" },
          "30%": { transform: "translateX(16px)", opacity: 1, scale: "1" },
          "50%": { transform: "translateX(-8px)", opacity: 1, scale: "1" },
          "60%": { transform: "translateX(-8px)", opacity: 1, scale: "1.2" },
          "80%, 100%": {
            transform: "translateX(-8px)",
            opacity: 0,
            scale: "1.2",
          },
        },
      },
    },
  },
  plugins: [
    plugin(
      function ({ addUtilities, theme, e }) {
        const values = theme("animationDelay");
        var utilities = Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}` },
          };
        });
        addUtilities(utilities);
      },
      {
        theme: {
          animationDelay: {
            200: "200ms",
            320: "320ms",
            430: "430ms",
            1000: "1000ms",
            bonjour: "2000ms",
            iama: "2500ms",
            ntmy: "4000ms",
            2000: "2000ms",

            3500: "3500ms",
            5500: "5500ms",
            7000: "7000ms",
          },
        },
      }
    ),
  ],
};
