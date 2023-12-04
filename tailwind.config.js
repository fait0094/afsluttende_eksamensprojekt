/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary_white: "#faf6ef",
        secondary_beige: "#ece6dc",
        light_brown: "#513826",
        dark_brown: "#462216",
        darkest_brown: "#35261C",
        accent_green: "#1e4b1e",
        light_accent_green: "#426A46",
      },
      fontSize: {
        "heading-1": ["3.052rem"],
        "heading-2": ["2.441rem"],
        "heading-3": ["1.953rem"],
        "heading-4": ["1.563rem"],
        "heading-5": ["1.25rem"],
      },
    },
  },
  plugins: [],
};
