/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        indigo: {
          50: 'oklch(97.2% 0.01 258.338)',
          100: 'oklch(95.2% 0.015 258.338)',
          200: 'oklch(92.2% 0.02 258.338)',
          300: 'oklch(89.2% 0.03 258.338)',
          400: 'oklch(85.2% 0.04 258.338)',
          500: 'oklch(80.2% 0.05 258.338)',
          600: 'oklch(75.2% 0.06 258.338)',
          700: 'oklch(70.2% 0.04 258.338)',
          800: 'oklch(65.2% 0.03 258.338)',
          900: 'oklch(60.2% 0.02 258.338)',
        },
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        progressAnimation: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
};