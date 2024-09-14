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
        sec3Image1: `url("/ThirdSectionImages/gallery-1-desktop.jpg")`,
        sec3Image2: `url("/ThirdSectionImages/gallery-2-desktop.jpg")`,
        sec3Image3: `url("/ThirdSectionImages/gallery-3-desktop.jpg")`,
        sec3Image4: `url("/ThirdSectionImages/gallery-4-desktop.jpg")`,
        sec3Image5: `url("/ThirdSectionImages/gallery-5-desktop.jpg")`,
      },
      fontFamily: {
        freightProMedium: ["freightProMedium", "sans-serif"],
        freightProBold: ["freightProBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
