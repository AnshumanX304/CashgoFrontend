/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/Components/AuthComponent/**/*.{js,ts,jsx,tsx}",
    // "./src/Components/PageComponent/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
      }
    },
  },
  plugins: [],
}

