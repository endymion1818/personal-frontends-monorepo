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
      'display': ['Serpentine'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#333",
          secondary: "#f7ebc1",
          accent: "#331f33",
        },
      },
      "luxury",
    ],
  },
}