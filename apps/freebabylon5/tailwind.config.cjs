const plugin = require('tailwindcss/plugin');

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
    },
    extend: {
      textShadow: {
        sm: '0 1px 0px var(--tw-shadow-color)',
        DEFAULT: '1px 1px 3px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    }
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
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