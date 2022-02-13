module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'shop-white': '#FFFFFF',
        'shop-black': '#000000',
        'shop-very-light-pink': '#C7C7C7',
        'shop-text-input-field': '#F7F7F7',
        'shop-hospital-green': '#ACD9B2',
      },
      gridTemplateColumns: {
        'shop-auto-fill-max': 'repeat(auto-fill, 240px)',
        'shop-auto-fill-min': 'repeat(auto-fill, 144px)',
        'shop-card-grid': 'auto 1fr auto auto',
        'shop-a1': 'auto 1fr'
      },
      gridTemplateRows: {
        'shop-a1a': 'auto 1fr auto'
      }

    },
  },
  plugins: [],
}