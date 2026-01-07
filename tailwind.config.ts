import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.mdx'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        pine: '#0F3D2E',
        moss: '#355E3B',
        clay: '#C76B4E',
        sunrise: '#F4B183',
        snow: '#F8F6F2',
        mist: '#E6EEF2',
        canyon: '#5B3A29'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia']
      },
      boxShadow: {
        soft: '0 16px 40px -24px rgba(15, 23, 42, 0.35)'
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(244, 177, 131, 0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(15, 61, 46, 0.25), transparent 45%)',
        'grain': 'url("/images/grain.svg")'
      }
    }
  },
  plugins: [typography]
};

export default config;
