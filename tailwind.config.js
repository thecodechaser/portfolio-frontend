/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(163, 230, 53, 0.4), 0 8px 40px -8px rgba(163, 230, 53, 0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      // Modern minimal palette
      bg: '#0a0a0b',
      surface: '#111114',
      elevated: '#16161a',
      border: '#26262b',
      hairline: '#1c1c20',
      muted: '#1f1f24',

      fg: '#fafafa',
      subtle: '#a1a1aa',
      faint: '#71717a',
      mute: '#52525b',

      accent: '#a3e635',
      'accent-hover': '#bef264',
      'accent-soft': 'rgba(163, 230, 53, 0.12)',
      'accent-ring': 'rgba(163, 230, 53, 0.35)',

      // Legacy aliases — remapped to modern values so any unmodified
      // markup still renders coherently against the new palette.
      primaryColor: '#0a0a0b',
      secondaryColor: '#a3e635',
      skyColor: '#fafafa',
      darkSkyColor: '#a1a1aa',
      blueColor: '#16161a',
      lightBlueColor: '#1f1f24',
    },
  },
  plugins: [],
};
