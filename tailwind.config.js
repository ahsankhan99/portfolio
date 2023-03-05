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
        space: ['"Space Grotesk"', 'sans']
      },
      colors: {
        'bg-body': 'hsl(0, 0%, 8%)',
        'bg-body2': 'hsl(0, 0%, 14%)',
        'accent': 'hsl(153, 71%, 59%)',
        'text1': 'hsl(0, 0%, 100%)',
        'text2': 'hsl(0, 0%, 85%)',
        'invalid': 'hsl(7, 100%, 68%)',
      }
    }
  },
  plugins: [],
}
