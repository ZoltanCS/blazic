/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        concrete: {
          white: '#ffffff',
          light: '#f7f5f0',
          DEFAULT: '#efebe5',
          mid: '#d4d0cb',
          dark: '#6b6560',
          darker: '#2a2520',
          darkest: '#1c1a18',
        }
      },
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 15vw, 12rem)',
        'xxl': 'clamp(2rem, 8vw, 6rem)',
        'xl': 'clamp(1.5rem, 5vw, 3.5rem)',
      },
    },
  },
  plugins: [],
}
