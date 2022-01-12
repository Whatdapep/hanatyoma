module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "krabi-image-background":
          "url('/public/images/marcin-kalinski-PCgM2CYm6HA-unsplash-min.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
