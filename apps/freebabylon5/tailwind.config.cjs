const {
  createGlobPatternsForDependencies,
} = require('@nxtensions/astro/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'),
    join(__dirname, '../../libs/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'),
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'display': ['serpentine'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#428bca",
          secondary: "#000",
          accent: "#333",
        },
      },
      "luxury",
    ],
  },
}