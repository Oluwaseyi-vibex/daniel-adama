import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

   variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
   plugins: [
    require('daisyui'),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin'
        },
        '.scrollbar-thumb-rounded': {
          'scrollbar-color': '#888 #f1f1f1',
          'border-radius': '10px'
        },
        '.scrollbar-thumb': {
          'scrollbar-color': '#888 #f1f1f1',
        },
        '.scrollbar-thumb:hover': {
          'scrollbar-color': '#555 #f1f1f1',
        },
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            height: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            'border-radius': '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
  
};
export default config;
