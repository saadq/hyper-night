const white = '#FFFFFF'
const black = '#000000'
const lightGray = '#868e96'
const darkGray = '#555d65'
const green = '#b2f2bb'
const yellow = '#ffec99'
const red = '#ff8787'

const backgroundColor = black
const foregroundColor = darkGray
const borderColor = black
const cursorColor = lightGray

const colors = {
  black,
  white,
  red,
  green,
  yellow,
  blue: lightGray,
  magenta: lightGray,
  cyan: lightGray,
  lightBlack: lightGray,
  lightRed: lightGray,
  lightGreen: lightGray,
  lightYellow: lightGray,
  lightBlue: lightGray,
  lightMagenta: lightGray,
  lightCyan: lightGray,
  colorCubes: white,
  grayscale: darkGray
}

exports.decorateConfig = config =>
  Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      ::selection {
        background: ${lightGray};
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${darkGray};
        font-size: 11px;
        text-transform: uppercase;
        margin-top: -1px;
        border-top: none;
      }
      .tab_tab.tab_active {
        color: ${lightGray};
        font-weight: bold;
        border-top: none;
      }
    `
  })
