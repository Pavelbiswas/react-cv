/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#c7e0fd',
          300: '#a4cafe',
          400: '#7eb3f9',
          500: '#4b9cf5',
          600: '#2c7ce8',
          700: '#1e5fb8',
          800: '#1a4a94',
          900: '#174077',
        },
        secondary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c6d7ff',
          300: '#a1b5ff',
          400: '#7a8fff',
          500: '#5568ff',
          600: '#3d45f5',
          700: '#3038cc',
          800: '#2430a4',
          900: '#1e2582',
        },
        accent: {
          50: '#fff5f0',
          100: '#ffebde',
          200: '#ffd4ba',
          300: '#ffb595',
          400: '#ff8d5e',
          500: '#ff6838',
          600: '#f5431a',
          700: '#dc2d0b',
          800: '#b5200a',
          900: '#92180c',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
