/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Familjen Grotesk Bold', 'SpaceMono Bold'],
      body: ['Familjen Grotesk', 'SpaceMono']
    }
  }
  ,
  plugins: [],
}

