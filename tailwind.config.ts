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
        bg:      '#04060F',
        bg2:     '#070B18',
        violet:  '#8B5CF6',
        cyan:    '#06B6D4',
        lime:    '#A3E635',
        muted:   '#64748B',
      },
      fontFamily: {
        clash:   ['Clash Display', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        orbitron:['Orbitron', 'sans-serif'],
      },
      animation: {
        'border-spin': 'borderSpin 4s linear infinite',
        'scan':        'scanMove 3s ease-in-out infinite',
        'blink':       'blink 1.5s ease infinite',
        'float':       'float 6s ease-in-out infinite',
        'drift':       'drift 8s ease-in-out infinite',
      },
      keyframes: {
        borderSpin: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%':     { 'background-position': '100% 50%' },
        },
        scanMove: {
          '0%':   { top: '0%', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0)' },
          '33%':     { transform: 'translate(30px,-20px)' },
          '66%':     { transform: 'translate(-20px,30px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
