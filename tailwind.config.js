/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
          'blue-cyan' : '#208D8E',
          'start-linear' : '#118C80',
          'end-linear' : '#4AB7D8'
      },
      backgroundImage: {
        'register-background' : "url('/images/auth-background.svg')",
      },
      backgroundColor : {
        'background-color-start' : ''
      }
    },
  },
  plugins: [],
}
