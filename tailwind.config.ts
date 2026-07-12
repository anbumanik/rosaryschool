import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2D52",
          dark: "#0A1F3B",
          light: "#1A4175",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E1C36B",
        },
        green: {
          DEFAULT: "#2E8B57",
        },
        lightBg: "#F5F7FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(15, 45, 82, 0.1)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(to bottom right, #0A1F3B, #0F2D52)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Assuming we duplicate the content, we translate by half
        }
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
