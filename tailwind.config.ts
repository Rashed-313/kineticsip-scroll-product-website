import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: "#ff8a1f",
        mango: "#ffbf47",
        crimson: "#d71945",
        matte: "#080706",
        smoke: "#15110f",
      },
      boxShadow: {
        glow: "0 0 64px rgba(255, 138, 31, 0.32)",
        crimson: "0 0 72px rgba(215, 25, 69, 0.28)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-mango":
          "radial-gradient(circle at 50% 45%, rgba(255, 168, 36, 0.34), rgba(215, 25, 69, 0.12) 34%, rgba(8, 7, 6, 0) 68%)",
      },
    },
  },
  plugins: [],
};

export default config;
