import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from master file
        'deep-teal': '#1a4d5c', // Deep teal from business cards & letterhead
        'warm-cream': '#fdf7f0', // Warm off-white / cream background
        'warm-beige': '#f5ede0', // Slightly darker cream for subtle contrast
      },
      fontFamily: {
        marble: ['var(--font-marble)', 'serif'], // Marble font for headings
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'], // Clean sans-serif for body
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
export default config
