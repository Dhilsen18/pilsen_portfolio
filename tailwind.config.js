/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinkCursor: {
          '0%, 100%': { 'border-right-color': 'rgba(255, 255, 255, 0.75)' },
          '50%': { 'border-right-color': 'transparent' },
        }
      },
      animation: {
        'blink-cursor': 'blinkCursor 0.75s step-end infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
