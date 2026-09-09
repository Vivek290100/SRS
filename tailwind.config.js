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
          DEFAULT: '#1e3a5f',
          light: '#2a5298',
          dark: '#0f2340',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
          dark: '#d97706',
        },
        sky: {
          bg: '#e8f4fd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f2340 0%, #1e3a5f 50%, #2a5298 100%)',
        'accent-gradient': 'linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(30,58,95,0.05) 0%, rgba(30,58,95,0.1) 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(30,58,95,0.1)',
        'card-hover': '0 8px 30px rgba(30,58,95,0.2)',
        'navbar': '0 2px 20px rgba(0,0,0,0.1)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
