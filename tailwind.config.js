/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/components/Header.jsx', './src/components/Hero.jsx', './src/components/TopPicks.jsx', './src/components/ThrillSection.jsx', './src/components/ShopNow.jsx', './src/components/Footer.jsx', './src/components/CartHeader.jsx'],
  theme: {
    extend: {},
    colors: {
      'dullYellow': '#F7E7CE',
      'heroPink': '#F1387C',
      'white': '#FFFFFF',
      'dullPink': '#EB3077',
      'neutralPink': '#EF4685',
      'text-pink': '#EF327C',
      'naturalPink': '#EF337C',
      'livelyPink': '#EB4283',
      'bleetYellow': '#FFDD25',
      'glassyBlack': '#181B1F',
      'tradyPink': '#EA377C',
    }
  },
  plugins: [],
}

