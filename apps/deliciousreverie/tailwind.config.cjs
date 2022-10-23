module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
    '../../libs/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'display': ['Lovechild'],
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
