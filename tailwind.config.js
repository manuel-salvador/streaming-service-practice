/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'list-cards': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [],
};
