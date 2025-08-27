/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-particles': 'float-particles 25s infinite linear',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        'float-particles': {
          '0%': {
            transform: 'translateY(100vh) translateX(0) rotate(0deg)',
            opacity: '0',
            scale: '0.5',
          },
          '10%': {
            opacity: '1',
            scale: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) translateX(200px) rotate(360deg)',
            opacity: '0',
            scale: '0.5',
          },
        },
        'text-glow': {
          from: {
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
          },
          to: {
            filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))',
          },
        },
        'fadeInUp': {
          from: {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'bounce': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
  plugins: [],
};
