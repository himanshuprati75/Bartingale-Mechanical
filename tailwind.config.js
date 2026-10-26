/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          950: '#450a0a',
          900: '#7f1d1d',
          800: '#991b1b',
          700: '#b91c1c',
          600: '#c8102e', // Bartingale Signature Crimson
          500: '#ef4444',
          400: '#f87171',
          100: '#fee2e2',
          50: '#fef2f2',
        },
        iron: {
          950: '#070b12',
          900: '#0f172a',
          850: '#152136',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        amberGold: {
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          100: '#fef3c7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
