/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#78cc6d',
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        
      },
      keyframes: {
        bgAnimate: {
          '0%,100%': { backgroundPosition: 'left' },
          '50%': { backgroundPosition: 'right' },
        }
      },
      animation: {
        bgAnimate: 'bgAnimate 25s infinite ',
      },
    }
  },
  plugins: [],
}