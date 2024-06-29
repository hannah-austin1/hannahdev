/* eslint-disable import/no-anonymous-default-export */
import { fontFamily } from "tailwindcss/defaultTheme";
const { createThemes } = require("tw-colors");
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
        body: ["var(--font-body)", ...fontFamily.sans],
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    iconsPlugin({ collections: getIconCollections(["all"]) }),
    require("tailwindcss-animate"),
    createThemes({
      low: {
        primary: "#EF1624",
        secondary: "#00BEA2",
        background: "black",
        foreground: "#F3F3F3",
        mutedForeground: "#A1A1B3",
        accent: "#00EDF1",
        accentForeground: "#003391",
        card: "#FFFFFF",
        border: "#1A1A66",
        ring: "#00EDF1",
        gradient: "#FC94B3",
      },
      good: {
        primary: "#43AA8B",
        secondary: "#D65C81",
        background: "#4c0fa7",
        foreground: "#F3F3F3",
        mutedForeground: "#A1A1B3",
        accent: "#aa4397",
        accentForeground: "#FFFFFF",
        card: "#FFFFFF",
        border: "#4C4C6D",
        ring: "#43AA8B",
        gradient: "#6330B4",
      },
      high: {
        primary: "#FEC643",
        secondary: "#437BFE",
        background: "#5e2fb2",
        foreground: "#F3F3F3",
        mutedForeground: "#A1A1B3",
        accent: "#437BFE",
        accentForeground: "#FFFFFF",
        card: "#FFFFFF",
        border: "#5A1E13",
        ring: "#437BFE",
        gradient: "#EC8235",
      },
      defaultTheme: "good",
    }),
  ],
};
