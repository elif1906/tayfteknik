/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#b7e3ff',
          300: '#80d0ff',
          400: '#3fb6ff',
          500: '#1897f5',
          600: '#0c78d1',
          700: '#0b5fa9',
          800: '#0d4f87',
          900: '#0f416d',
        },
        ink: {
          50: '#f8fafc',
          100: '#eef2f6',
          200: '#d6e0ea',
          300: '#b1c1d3',
          400: '#8299b2',
          500: '#5f7892',
          600: '#445a73',
          700: '#35475c',
          800: '#273647',
          900: '#1b2534',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(15, 65, 109, 0.18)',
      },
    },
  },
  plugins: [],
}

