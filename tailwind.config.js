const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#12151E',
        'hot-pink': '#fd2d78',
        'white': '#FFFFFF',  // Add this if not already present
        'gray-900': {
          DEFAULT: '#18191a',
          light: '#F4F4F4'  // light mode version
        },
        'gray-800': {
          DEFAULT: '#212324',
          light: '#ECECEC'
        },
        'gray-700': {
          DEFAULT: '#2F3133',
          light: '#D3D4D4'
        },
        'gray-600': {
          DEFAULT: '#404345',
          light: '#A7A8A8'
        },
        'gray-500': {
          DEFAULT: '#55585A',
          light: '#797B7C'
        },
        'gray-400': {
          DEFAULT: '#797B7C',
          light: '#55585A'
        },
        'gray-300': {
          DEFAULT: '#A7A8A8',
          light: '#404345'
        },
        'gray-200': {
          DEFAULT: '#D3D4D4',
          light: '#2F3133'
        },
        'gray-100': {
          DEFAULT: '#ECECEC',
          light: '#212324'
        },
        'gray-50': {
          DEFAULT: '#F4F4F4',
          light: '#18191a'
        },
      },      
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.500'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.indigo.500'),
              },
              strong: {
                color: theme('colors.gray.200'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.700'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
              h3: {
                color: theme('colors.gray.100'),
              },
              h4: {
                color: theme('colors.gray.100'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
      fontFamily: {
        sans: ['Inter var',...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    require('@tailwindcss/line-clamp')
  ],
}
