/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          100: '#D3EABC',
          150: '#91C45D',
          200: '#75BA31',
          250: '#66A22B'
        }
      }
    },
  },
  plugins: [],
}