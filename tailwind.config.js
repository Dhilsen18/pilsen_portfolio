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
      },
      boxShadow: {
        'neumorphic-light': '8px 8px 16px rgba(174, 174, 192, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        'neumorphic-dark': '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.15)',
        'neumorphic-light-sm': '2px 2px 4px rgba(174, 174, 192, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.4)',
        'neumorphic-dark-sm': '2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(50, 50, 50, 0.4)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
