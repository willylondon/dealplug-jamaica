/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A84B',
          light: '#E8C878',
          dark: '#B8923F',
        },
        green: {
          DEFAULT: '#2D8B4E',
          light: '#3AA862',
          dark: '#236B3C',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          light: '#2D4F7A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
