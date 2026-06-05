/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette for the travel website
      colors: {
        primary: {
          DEFAULT: '#2D9C5E',    // Main brand green
          dark: '#238B4F',       // Darker green for hover states
          light: '#E8F5E9',      // Light green for backgrounds
        },
        secondary: {
          DEFAULT: '#F59E0B',    // Amber/gold for accents
        },
        'accent-orange': {
          DEFAULT: '#F97316',    // Vibrant orange for CTAs
        },
        'bg-dark': {
          DEFAULT: '#1A3C2B',    // Dark green for navigation/footer
        },
      },
      // Custom font size extensions
      fontSize: {
        'xxs': '0.625rem',       // 10px - for tiny labels
        'tiny': '0.6875rem',     // 11px - for fine print
        'hero': '3.5rem',        // 56px - for hero headings
        'display': '4.5rem',     // 72px - for large display text
      },
      // Custom border radius extensions
      borderRadius: {
        '4xl': '2rem',           // 32px
        '5xl': '2.5rem',         // 40px
        '6xl': '3rem',           // 48px
        'pill': '9999px',        // Fully rounded pill shape
      },
      // Custom spacing extensions
      spacing: {
        '18': '4.5rem',          // 72px
        '22': '5.5rem',          // 88px
        '30': '7.5rem',          // 120px
        '34': '8.5rem',          // 136px
        '38': '9.5rem',          // 152px
        '42': '10.5rem',         // 168px
        '50': '12.5rem',         // 200px
        '60': '15rem',           // 240px
      },
      // Custom animation for travel-themed transitions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};