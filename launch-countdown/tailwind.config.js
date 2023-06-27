/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'grayish-blue': 'hsl(237, 18%, 59%)',
        'very-dark-blue': 'hsl(234, 17%, 12%)',
        'very-dark-blue-ligher': 'hsl(235, 16%, 14%)',
        'dark-desaturated-blue': 'hsl(236, 21%, 26%)',
        'soft-red': 'hsl(345, 95%, 68%)',
      },
      textColor: {
        'soft-red': 'hsl(345, 95%, 68%)',
        'grayish-blue': 'hsl(237, 18%, 59%)',
        'very-dark-blue': 'hsl(234, 17%, 12%)',
        'very-dark-blue-ligher': 'hsl(235, 16%, 14%)',
        'dark-desaturated-blue': 'hsl(236, 21%, 26%)',
      },
      fill: {
        'soft-red': 'hsl(345, 95%, 68%)',
      },
      fontFamily: {
        redHatText: 'redHatText',
      },
      borderColor: {
        'dark-desaturated-blue': 'hsl(236, 21%, 26%)',
      },
      keyframes: {
        calendarFlipDown: {
          '100%': {
            transform: 'rotateX(90deg)',
          },
        },

        calendarFlipBottom: {
          '100%': {
            transform: 'rotateX(0deg)',
          },
          '0%': {
            transform: 'rotateX(90deg)',
          },
        },
      },
      animation: {
        calendarFlipDown: 'calendarFlipDown 1000ms ease-in infinite',
        calendarFlipBottom:
          'calendarFlipBottom 1000ms ease-out infinite 1000ms',
      },
    },
  },
  plugins: [],
};
