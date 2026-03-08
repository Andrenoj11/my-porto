import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#07111f',
        panel: '#0d1b2d',
        line: '#1e314a',
        accent: '#61dafb',
        muted: '#97a8bd',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config
