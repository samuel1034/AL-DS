module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'crunchyroll-orange': '#f47521',
        'crunchyroll-dark': '#1a1a1a',
        'crunchyroll-light': '#f8f8f8',
        'animelingoPurple': '#8A2BE2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
