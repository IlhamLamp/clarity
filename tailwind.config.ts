import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#625DF5",
        canvas: "#F9FAFB",
        black: "#15171A",
      }
    },
  },
  variants: {
    display: ['group-hover']
  },
  plugins: [],
};
export default config;
