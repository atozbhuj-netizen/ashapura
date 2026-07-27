/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057B8',
          dark: '#004494',
        },
        secondary: {
          DEFAULT: '#F9A825',
          dark: '#F57F17',
        },
        accent: {
          DEFAULT: '#0F172A',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: '18px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      }
    },
  },
  plugins: [],
}
