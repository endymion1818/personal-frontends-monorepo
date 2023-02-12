const path = require('path');

module.exports = {
  plugins: [require('tailwindcss')],
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.cjs'),
    },
    autoprefixer: {},
  },
};
