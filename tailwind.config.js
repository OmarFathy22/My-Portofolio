/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '0px', 'max': '600px' },
      'md': { 'min': '600px', 'max': '1024px' },
      'sm-md': { 'min': '0px', 'max': '1024px' },
      'md-lg': { 'min': '900px', 'max': '1024px' },
      'lg': { 'min': '1024px'},
      'xl': { 'min': '1200px'},
      'xxl': { 'min': '1400px'},
      'max-1300':{'max':"1300px"},
      'max-1200':{'max':"1200px"},
    },
  },
  plugins: [],
}

