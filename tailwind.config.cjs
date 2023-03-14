/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/layouts/default.astro",
  ],
  theme: {
    fontFamily: {
      mono: ["MajorMono", "monospace"],
    },
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#161616",
      },
      dropShadow: {
        glowS: "0px 0px 1px rgb(255 255 255 / 60%)",
        glowM: "0px 0px 3px rgb(255 255 255 / 90%)",
        glowL: "0px 0px 10px rgb(255 255 255 / 60%)",
        glowXL: "0px 0px 10px rgb(255 255 255 / 90%)",
      },
    },
  },
  plugins: [],
};
