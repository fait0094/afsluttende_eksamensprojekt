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
        accent_green: "#1e4b1e",
      },
    },
  },
  plugins: [],
};
