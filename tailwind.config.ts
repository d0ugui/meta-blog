import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        work_sans: ["var(--font-work-sans)"]
      },
      colors: {
        secondary_100: "#F4F4F5",
        secondary_400: "#A1A1AA",
        secondary_600: "#3B3C4A",
        secondary_800: "#181A2A",
        primary: "#4B6BFB"
      }
    }
  },
  plugins: []
}
export default config
