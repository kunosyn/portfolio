import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      dropShadow: {
        'text': '0 0 4px #000'
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        'glow-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            'text-shadow': '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #b378cc, 0 0 80px #b378cc, 0 0 90px #b378cc, 0 0 100px #b378cc, 0 0 150px #b378cc'
          },

          '20%, 24%, 55%': {
            'text-shadow': 'none'
          }
        },

        'pulsating-glow': {
          '100%': {
            //'text-shadow': '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #b378cc, 0 0 80px #b378cc, 0 0 90px #b378cc, 0 0 100px #b378cc, 0 0 150px #b378cc',
            filter: 'drop-shadow(0 0 1.5px #fff) drop-shadow(0 0 6px #b378cc) drop-shadow(0 0 10px #b378cc) drop-shadow(0 0 13px #b378cc)'
          },

          '0%': {
            //'text-shadow': '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #b378cc, 0 0 45px #b378cc, 0 0 55px #b378cc, 0 0 70px #b378cc, 0 0 80px #b378cc',
            filter: 'drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #b378cc) drop-shadow(0 0 10px #b378cc) drop-shadow(0 0 12.5px #b378cc)'
          }
        },

        'box-pulsating-glow': {
          '100%': {
            'box-shadow': '0 0 4px #fff, inset 0 0 4px #fff, 0 0 10px #b378cc, 0 0 30px #b378cc, 0 0 60px #b378cc'
          },
          
          '0%': {
            'box-shadow': '0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #b378cc, 0 0 15px #b378cc, 0 0 30px #b378cc'
          }
        },

        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },

      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        'glow-flicker': 'glow-flicker 1.5s infinite alternate',
        'pulsating-glow': 'pulsating-glow 2.5s infinite alternate',
        'box-pulsating-glow': 'box-pulsating-glow 2.5s infinite alternate'
      }
    },
  },
  plugins: [],
};
export default config;
