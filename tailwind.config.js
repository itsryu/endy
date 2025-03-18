import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcssAnimate from "tailwindcss-animate";

const addVariablesForColors = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));

  const excludedKeys = [
    "background",
    "foreground",
    "card",
    "card-foreground",
    "popover",
    "popover-foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "muted",
    "muted-foreground",
    "accent",
    "accent-foreground",
    "destructive",
    "destructive-foreground",
    "border",
    "input",
    "ring",
    "chart-1",
    "chart-2",
    "chart-3",
    "chart-4",
    "chart-5",
    "color-1",
    "color-2",
    "color-3",
    "color-4",
    "color-5"
  ];

  const newVars = Object.fromEntries(
    Object.entries(allColors).reduce((acc, [key, val]) => {
      if (!excludedKeys.includes(key)) acc.push([`--${key}`, val]);
      return acc;
    }, [])
  );

  addBase({
    ":root": newVars,
    ".dark": newVars,
  });
};

const colorKeys = [
  "background", "foreground", "card", "popover", "primary",
  "secondary", "muted", "accent", "destructive", "border",
  "input", "ring", "chart-1", "chart-2", "chart-3", "chart-4", "chart-5"
];

const colors = Object.fromEntries(
  colorKeys.map((key) => [
    key,
    key.includes("chart") ? `hsl(var(--${key}))` : {
      DEFAULT: `hsl(var(--${key}))`,
      foreground: `hsl(var(--${key}-foreground))`
    }
  ])
);

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        ...colors
      },
      animation: {
        rainbow: 'rainbow var(--speed, 2s) infinite linear',
        grid: 'grid 15s linear infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite'
      },
      keyframes: {
        rainbow: {
          '0%': {
            'background-position': '0%'
          },
          '100%': {
            'background-position': '200%'
          }
        },
        grid: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        marquee: {
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)'
          }
        }
      }
    }
  },
  plugins: [tailwindcssAnimate, addVariablesForColors],
};

export { config as default };