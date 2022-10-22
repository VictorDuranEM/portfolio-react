const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'light': '#fff',
        'dark': '#303030',
        'accent': '#16e0bd',
      },
      fontSize: {
        'h1': 'var(--fs-h1)',
        'h2': 'var(--fs-h2)',
        'h3': 'var(--fs-h3)',
      },
      fontFamily: {
        'primary': ['Source Sans Pro', 'sans-serif'],
        'secondary': ['Source Code Pro', 'monospace'],
      },
      boxShadow: {
        'picture': '0.25em 0.25em 0.75em rgba(0,0,0,0.25), 0.125em 0.125em 0.25em rgba(0,0,0,0.25)',
      },
      gridTemplateColumns: {
        'title': 'min-content max-content',
        'about': 'auto auto',
        'work': 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      },
      gridTemplateRows: {
        'title': 'auto auto',
        'about': '80px 60px auto',
      },
      width: {
        'intro-subtitle': 'calc(100% + 2.25rem)',
      },
      backgroundImage: {
        'services': 'url("/services-bg.jpg")',
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        '*:focus': {
          outline: theme('colors.accent') + " solid 3px",
          outlineOffset: '3px',
        },
        'html': {
          scrollBehavior: 'smooth',
        },
        'body': { 
          fontFamily: theme('fontFamily.primary'),
          backgroundColor: theme('colors.light'),
          color: theme('colors.dark'),
          lineHeight: theme('lineHeight.relaxed'),
          fontSize: 'var(--fs-body)',
        },
        'h1': {
          fontSize: 'var(--fs-h1)'
        },
        'h2': {
          fontSize: 'var(--fs-h2)'
        },
        'h3': {
          fontSize: 'var(--fs-h3)'
        },
      })
    })
  ],
}