/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#f4ede2',
        softBrown: '#9d7b5f',
        white: '#ffffff',
      },
      boxShadow: {
        card: '0 10px 30px rgba(56, 42, 30, 0.12)',
        cardHover: '0 16px 40px rgba(56, 42, 30, 0.16)',
      },
      borderRadius: {
        card: '1rem',
        cardLg: '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
