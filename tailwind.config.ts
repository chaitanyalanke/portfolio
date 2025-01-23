import { rootTaskDispose, transform } from "next/dist/build/swc/generated-native";
import { trackSynchronousPlatformIOAccessInDev } from "next/dist/server/app-render/dynamic-rendering";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fly-up": "flyUp 1s ease-out",
        "fly-down": "flyDown 1s ease-out",
        "fly-right": "flyRight 1s ease-out",
        "fly-left": "flyLeft 1s ease-out",
        "float": "floatY 2s ease-in-out infinite",
        "carousel": "carousel 5s linear infinite",
        "appear-right": "appearRight 0.5s ease-in",
        "appear-left": "appearLeft 0.5s ease-in",
      },
      keyframes: {
        flyUp: {
          '0%': { transform: 'translateY(100%)', opacity: "0" }, // Start from the bottom and invisible
          '100%': { transform: 'translateY(0)', opacity: "1" },  // End at original position with full opacity
        },
        flyDown: {
          '0%': { transform: 'translateY(-100%)', opacity: "0" }, // Start from the bottom and invisible
          '100%': { transform: 'translateY(0)', opacity: "1" },  // End at original position with full opacity
        },
        flyRight: {
          '0%': { transform: 'translateX(100%)', opacity: "0" }, // Start from the bottom and invisible
          '100%': { transform: 'translateY(0)', opacity: "1" },  // End at original position with full opacity
        },
        flyLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: "0" }, // Start from the bottom and invisible
          '100%': { transform: 'translateY(0)', opacity: "1" },  // End at original position with full opacity
        },
        floatY: {
          "0%": {transform: "translateY(10%)"},
          "50%": {transform: "translateY(-10%)"},
          "100%": {transform: "translateY(10%)"},
        },
        carousel: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-100%)"},
        },
        appearRight: {
          "0%":{transform: "translateX(5%)", filter: "blur(2)", opacity: "0"},
          "100%":{transform: "translateX(0)", filter: "blur(0)", opacity: "1"},
        },
        appearLeft: {
          "0%":{transform: "translateX(-5%)", filter: "blur(2)", opacity: "0"},
          "100%":{transform: "translateX(0)", filter: "blur(0)", opacity: "1"},
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        silver:"rgb(187, 187, 187)",
        ed_theme:"rgb(231, 172, 243)",
        pdfq_theme:"rgb(219, 77, 79)",
        ip_theme:"rgb(80, 166, 240)",
        mustardYellow: "#FFDD57",
        deepPlum: "#2E112D",
        check: "#E63946",
      },
    },
  },
  plugins: [],
} satisfies Config;
