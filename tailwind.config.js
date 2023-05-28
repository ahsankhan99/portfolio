/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'Raleway', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'bg-body': 'hsl(0, 0%, 8%)',
        'bg-body2': 'hsl(0, 0%, 14%)',
        'accent': 'hsl(153, 71%, 59%)',
        'text1': 'hsl(0, 0%, 100%)',
        'text2': 'hsl(0, 0%, 85%)',
        'invalid': 'hsl(7, 100%, 68%)',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },
    },
    plugins: [],
  }
}
