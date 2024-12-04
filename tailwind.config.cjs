/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  animation: {
    "text-gradient": "text-gradient 1.5s linear infinite"
  },
  keyframes: {
    "text-gradient": {
      to: {
        backgroundPosition: "200% center"
      }
    }
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "15rem"
      }
    },
    extend: {
      colors: {
        accent: "#3b82f6",
        primary: "#171717",
        secondary: "#ffffff",
        // tertiary: "#f472b6",
        neutral: "#262626"
      }
    }
  },
  plugins: []
}
