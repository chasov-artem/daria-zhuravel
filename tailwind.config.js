/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#F5F0E8',
        softBrown: '#A67B5B',
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
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
