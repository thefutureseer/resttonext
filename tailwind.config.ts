import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-777vw)' }, // Move text off-screen horizontally
        },
        explosion: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        implosion: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
        enhancedExplosion: {
          '0%': { transform: 'scale(1)', opacity: '1', filter: 'blur(0px)' },
          '100%': { transform: 'scale(1.8)', opacity: '0', filter: 'blur(10px)' },
        },
      },
      animation: {
        spinOnce: 'spinOnce 1.77s ease-in-out 1',
        slideLeft: 'slideLeft 17s linear infinite',
        explosion: 'explosion 1s ease-out forwards',
        implosion: 'implosion 1s ease-in-out forwards',
        enhancedExplosion: 'enhancedExplosion 1s ease-out forwards',

      },
    },
  },
  plugins: [],
};

export default config;
