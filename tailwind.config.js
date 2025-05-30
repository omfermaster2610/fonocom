import { Fullscreen } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        patrick: ['Patrick Hand', 'cursive']
      },
      backgroundImage: {
        "comic-vignette":
          "radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.3) 100%)",
      },
      boxShadow: {
        comic: "4px 4px 0px #000, 8px 8px 0px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: '0.5rem',
        width: Fullscreen, 
      },
    },
  },
  plugins: [],
};

export default config;
