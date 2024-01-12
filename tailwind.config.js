/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html"
  ],
  theme: {
    colors: {
      black: '#252422',
      white: '#f4f4f4',
      pink: '#f9cdcd'
    },
    extend: {
      backgroundColor: {
        "bgColor": "var(--bgColor)"
      },
      animation: {
        slide: 'slide 0.5s linear'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)', opacity: 1 },
          '50%': { transform: 'translateX(100%)', opacity: 0 },
          '50.01%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 },
        }
      }
    },
    fontFamily: {
      heading: ['Familjen Grotesk Bold', 'SpaceMono Bold'],
      body: ['Familjen Grotesk', 'SpaceMono']
    }
  }
  ,
  plugins: [],
}

