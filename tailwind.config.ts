import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notLg: { max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.125rem',
        lg: '2rem',
      },
    },

    extend: {
      colors: {
        bg1: '#FFFFFF',
        bg2: '#FBF3EB',
      },

      fontFamily: {
        geologica: ['Geologica', 'sans-serif'],
      },

      fontSize: {
        small: ['14px', '1.5'],
        normal: ['18px', '1.5'],
        large: ['32px', '1.5'],
      },
    },
  },
  plugins: [],
};

export default config;