/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#111111',
        'charcoal-light': '#1A1A1A',
        tobacco: '#4A3426',
        'tobacco-light': '#5C4033',
        beige: '#D4C5B0',
        'beige-warm': '#E8DCC4',
        gold: '#B8935E',
        'gold-light': '#C9A961',
        'warm-white': '#F5F2ED',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(180deg, #1A1A1A 0%, #2A2520 100%)',
      },
      animation: {
        'slow-fade': 'slowFade 2s ease-in-out',
        'slow-rise': 'slowRise 1.5s ease-out',
      },
      keyframes: {
        slowFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowRise: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      letterSpacing: {
        'luxury': '0.1em',
      }
    },
  },
  plugins: [],
}

