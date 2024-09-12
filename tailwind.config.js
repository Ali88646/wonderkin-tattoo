/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-bg": "url(/elli-bg.jpg)",
      },
      fontFamily: {
        freightProMedium: ["freightProMedium", "sans-serif"],
        freightProBold: ["freightProBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
