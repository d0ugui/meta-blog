import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        work_sans: ["var(--font-work-sans)"],
        jakarta_sans: ["var(--font-jakarta-sans)"]
      },
      colors: {
        secondary_50: "#F6F6F7",
        secondary_100: "#F4F4F5",
        secondary_300: "#BABABF",
        secondary_400: "#A1A1AA",
        secondary_500: "#696A75",
        secondary_600: "#3B3C4A",
        secondary_700: "#242535",
        secondary_800: "#181A2A",
        primary: "#4B6BFB"
      }
    }
  },
  plugins: []
}
export default config
