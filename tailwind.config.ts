import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "dark", // default theme from the themes object
      layout: {
        // radius: {
        //   small: "0",
        //   medium: "0",
        //   large: "0",
        // },
      }, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#000000", // or DEFAULT #0f1114
            foreground: "#8799ab", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              50: "#e0fcfa",
              100: "#b3f7f4",
              200: "#80f2ec",
              300: "#4dece5",
              400: "#26e8e0",
              500: "#007bff", // your primary color
              600: "#07dbbe",
              700: "#06b19a",
              800: "#048976",
              900: "#036054",
              foreground: "#f1f3f5",
              DEFAULT: "#007bff",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
