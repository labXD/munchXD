/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('tailwind-local/presets')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/ui-local/**/*.js'],
}
