/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  safelist: [
    // this tells PurgeCSS to not remove classes that match the following patterns
    {
      pattern:
        /(bg|text)-(gray|purple)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern:
        /(bg|text)-(blue|red|green|brown|orange|purple|indigo|yellow)(|-(light))/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#111",
        white: "#fff",
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        blue: {
          DEFAULT: "#006ADC",
          light: "#E6EDFE",
        },
        red: {
          DEFAULT: "#CA3A3A",
          light: "#FFF6F6",
        },
        green: {
          DEFAULT: "#30A46C",
          light: "#DDF3E4",
        },
        brown: {
          DEFAULT: "#AD7F58",
          light: "#F4E9DD",
        },
        orange: {
          DEFAULT: "#F59E00",
          light: "#FEFAF2",
        },
        purple: {
          DEFAULT: "#8E4EC6",
          light: "#F3E7FC",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        indigo: {
          DEFAULT: "#6888F6",
          light: "#EDEBFF",
        },
        yellow: {
          DEFAULT: "#F0C000",
          light: "#FFFBD1",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
