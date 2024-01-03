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
      heading: ['SpaceMono Bold'],
      body: ['SpaceMono']
    }
  }
  ,
  plugins: [],
}

