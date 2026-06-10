/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-day": "#87CEEB",
        "sky-day-2": "#B8E0F7",
        "grass-bright": "#6ABF5E",
        "grass-mid": "#4E9A3E",
        "grass-dark": "#3A7A2E",
        "soil-brown": "#8B5E3C",
        "soil-light": "#C4894F",
        "stone-gray": "#9B9B9B",
        "stone-light": "#C8C8C8",
        "wood-brown": "#8B6914",
        "wood-dark": "#5C4A1E",
        "gold-pixel": "#FFD700",
        "gold-dark": "#C4A000",
        "warm-white": "#FFF9F0",
        "warm-cream": "#FFF3DC",
        "sky-night": "#1A1A3E",
        "sky-night-2": "#0D0D2B",
        "night-purple": "#2D1B69",
        "moon-yellow": "#FFFACD",
        "star-white": "#F0F0FF",
        "pixel-green": "#00C851",
        "pixel-red": "#FF4444",
        "pixel-blue": "#33B5E5",
        "pixel-yellow": "#FFBB33",
        "pixel-purple": "#AA66CC",
        "pixel-orange": "#FF8800",
        "dark-bg": "#0F0F1A",
        "dark-panel": "#1A1A2E",
        "dark-border": "#2D2D4A",
        "dark-text": "#E8E0FF",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        sway: "sway 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "cloud-drift": "cloud-drift 20s linear infinite",
        "cloud-drift-slow": "cloud-drift 35s linear infinite",
        "bird-fly": "bird-fly 8s ease-in-out infinite",
        "star-twinkle": "star-twinkle 2s ease-in-out infinite",
        "bounce-pixel": "bounce-pixel 0.6s steps(3) infinite",
        "slide-in-left": "slide-in-left 0.5s steps(8) forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "xp-fill": "xp-fill 1.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 4px 2px rgba(255, 215, 0, 0.4)" },
          "50%": { boxShadow: "0 0 12px 6px rgba(255, 215, 0, 0.8)" },
        },
        "cloud-drift": {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(calc(100vw + 200px))" },
        },
        "bird-fly": {
          "0%": { transform: "translateX(-50px) translateY(0)" },
          "50%": { transform: "translateX(50vw) translateY(0)" },
          "100%": { transform: "translateX(110vw) translateY(0)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.7)" },
        },
        "bounce-pixel": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "xp-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--xp-width)" },
        },
      },
      boxShadow: {
        "pixel-sm": "2px 2px 0 rgba(0,0,0,0.5)",
        "pixel-md": "4px 4px 0 rgba(0,0,0,0.5)",
        "pixel-lg": "6px 6px 0 rgba(0,0,0,0.5)",
        "glow-gold": "0 0 8px 2px rgba(255,215,0,0.6)",
        "glow-green": "0 0 8px 2px rgba(106,191,94,0.6)",
        "glow-blue": "0 0 8px 2px rgba(51,181,229,0.6)",
        "glow-purple": "0 0 8px 2px rgba(170,102,204,0.6)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
