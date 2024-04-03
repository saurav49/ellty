import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#FFCE22",
        brandActive: "#FFD84D",
        charcoalblack: "#1F2128",
        divider: "#CDCDCD",
        silver: "#BDBDBD",
        blue: "#2469F6",
        lightblue: "#5087F8",
      },
      keyframes: {
        btnbounce: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(0.75px, 1.25px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        btnbounce: "btnbounce 200ms ease-in-out",
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
