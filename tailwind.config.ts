import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        core: 'var(--core)',
        'light-grey': 'var(--light-grey)',
        'bloody-red': 'var(--bloody-red)',
        'light-green': 'var(--light-green)',
      },
      backgroundImage: {
        main: "url('/images/main_background.jpg')",
        '01': "url('/images/01.svg')",
        '02': "url('/images/02.svg')",
      },
      fontFamily: {
        'tt-norms': ['var(--font-ttnorms)'],
      },
      letterSpacing: {
        primary: '0.2em',
        secondary: '0.03em',
      },
      lineHeight: {
        primary: '30px',
        secondary: '15px',
      },
      fontSize: {
        'extra-small': '0.625rem',
      },
    },
    screens: {
      '3xsm': '320px',
      '2xsm': '390px',
      xsm: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config;
