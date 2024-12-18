/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
      keyframes: {
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear'
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      colors: {
        primary: '#287F71',
        secondary: '#EB862A',
        tertiary: '#ABBDD3',
        neutral: {
          light: '#97A3B6',
          dark: '#111729',
        },
        red: {
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        white: '#ffffff',
        // Keep white and red as is for backgrounds and errors
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

