/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/layouts/default.astro",
  ],
  theme: {
    fontFamily: {
      mono: ["MajorMono", "monospace"],
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#161616",
        dark: "#101010",
      },
      dropShadow: {
        glowS: "0px 0px 1px rgb(255 255 255 / 70%)",
        glowM: "0px 0px 3px rgb(255 255 255 / 70%)",
        glowL: "0px 0px 7px rgb(255 255 255 / 70%)",
      },
    },
  },
  plugins: [],
};
