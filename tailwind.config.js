module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        drop: 'drop 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out infinite',
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        beat: 'beat 1s ease-in-out infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(1%)' },
          '50%': { transform: 'translateX(50%)' },
        },
        drop: {
          '0%, 50%': { transform: 'translateY(-20%)' },
          '0%, 100%': { transform: 'translateY(20%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': {opacity: '0' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(100%)' },
          '50%': { transform: 'scale(110%)' },
        },
        shake : {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          },
        },
      },
  },
  plugins: [],
 },
}