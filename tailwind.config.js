module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  darkMode: "class",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      titles: ['Poppins', 'sans-serif'],
      subtitles: ['Montserrat', 'sans-serif'],
      texto: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        lightShades: {
          200: '#FEFEFE',
          500: '#F9F9F9',
          700: '#B37D86',
        },
        accents: {
          200: '#A2E3D0',
          500: '#16B98A',
          700: '#0D6F53',
        },
        mainBrand: {
          200: '#BEB8E5',
          500: '#5D4EBF',
          700: '#382F73',
        },
        darkShades: {
          200: '#ACB3B9',
          500: '#30404F',
          700: '#1D262F',
        },
        semanticInfo: {
          200: '#99E2F9',
          500: '#00B7EF',
          700: '#006E8F',
        },
        semanticSuccess: {
          200: '#CBEBA3',
          500: '#7CCE18',
          700: '#4A7C0E',
        },
        semanticDanger: {
          200: '#EFA7B1',
          500: '#D8223D',
          700: '#821425',
        },
        semanticWarning: {
          200: '#F1DE99',
          500: '#DDAD00',
          700: '#856800',
        },
      },
    },
  },
  variants: {},
  plugins: []
};
