/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#FAFAFE',
        'pearl-warm': '#F7F5FC',
        lavender: {
          50:  '#F8F5FF',
          100: '#F0EAFC',
          200: '#E2D8F8',
          300: '#CBBCF0',
          400: '#B09AE4',
          500: '#9478D4',
          600: '#7A5CC0',
          700: '#6248A8',
          800: '#4E3888',
          900: '#3A2868',
        },
        silver: {
          50:  '#F8F8FC',
          100: '#F0EEFC',
          200: '#E4E0F4',
          300: '#CCC8E8',
          400: '#B0AACF',
          500: '#948CB8',
        },
        'space-gray': '#1E1A2E',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'serif'],
        'serif-jp': ['Noto Serif JP', 'serif'],
        sans:   ['Noto Sans JP', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-10px) rotate(3deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%,100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%':     { opacity: '0.7', transform: 'scale(1.06)' },
        },
        drift: {
          '0%':   { transform: 'translate(0,0) rotate(0deg)' },
          '33%':  { transform: 'translate(22px,-28px) rotate(120deg)' },
          '66%':  { transform: 'translate(-16px,18px) rotate(240deg)' },
          '100%': { transform: 'translate(0,0) rotate(360deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        gloss: {
          '0%':   { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
      animation: {
        'float':       'float 5s ease-in-out infinite',
        'float-slow':  'float-slow 7s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 1s infinite',
        'shimmer':     'shimmer 4s linear infinite',
        'glow':        'glow 4s ease-in-out infinite',
        'glow-slow':   'glow 7s ease-in-out infinite',
        'drift':       'drift 22s linear infinite',
        'drift-r':     'drift 30s linear reverse infinite',
        'fade-up':     'fadeUp 0.9s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'slide-left':  'slideLeft 0.8s ease forwards',
        'slide-right': 'slideRight 0.8s ease forwards',
        'gloss':       'gloss 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
