/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/flowbite-svelte/**/*.{js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
