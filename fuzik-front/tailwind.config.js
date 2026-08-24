/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
		themes: ["light"]
	},

  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  variants: {
    extend: {},
  },
  /** cannot use, use CSS instead */
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans Thai', 'Noto Sans'],
      },
      width: {
        '288': '72rem',
        '178': '45rem',
        '168': '42.5rem',
        '158': '40rem',
        '138': '35rem',
        '134': '34.5rem',
        '128': '32.5rem',
        '118': '30rem',
        '88' : '22rem',
        '82' : '20.5rem',
        '84' : '21rem'
      },
      height: {
        '26':  '6.5rem',
        '88' : '22rem',
        '82' : '20.5rem',
        '84' : '21rem',
        '128': '32.5rem',  
        '158': '40rem',
        '178': '45rem',
        '138': '35rem'
        
      }
     
      //colors: {
      //  'black': "#212121",
      //  'yellow': "#FFF600",
      //},
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
}

