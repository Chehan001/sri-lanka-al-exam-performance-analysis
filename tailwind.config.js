/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38aaf7',
          500: '#0e8fe5',
          600: '#0271c2',
          700: '#035ab2',
          800: '#074c93',
          900: '#0c407a',
          950: '#082951',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
