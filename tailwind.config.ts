import type { Config } from "tailwindcss";

const config: Partial<Config> = {
  plugins: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
};
export default config;
