/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anthracite: '#18181B', // Base sombre
        primary: '#7C3AED',    // Violet intense (Éléments interactifs)
        secondary: '#1D4ED8',  // Bleu profond (Survol)
        light: '#F8FAFC',      // Blanc grisé (Texte)
      }
    },
  },
  plugins: [],
}