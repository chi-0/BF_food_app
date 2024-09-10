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
    },
    fontSize: {
      s: "12px",
      sm: "14px",
      base: "16px",
      "base-m": "14px",
      xl: "1.2rem",
      "2xl": "30px",
    },
    backgroundColor: {
      hover: "rgba(255,255,255,0.8)",
    },
  },
  plugins: [],
};
export default config;
