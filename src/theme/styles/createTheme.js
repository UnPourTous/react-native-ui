import LightTheme from './preset-themes/LightTheme'
import merge from 'lodash.merge'

/**
 * Create a new theme object base on default theme and input theme
 *
 * @export
 * @param {object} theme
 * @param {object} more
 * @returns {object}
 */
export default function createTheme (theme = {}, ...more) {
  const noneUiTheme = merge({}, LightTheme, theme, ...more)

  const {borderRadius, palette, fontFamily} = noneUiTheme
  return merge({
    button: {
      primary: {
        borderRadius: borderRadius,
        textColor: palette.textColor,
        backgroundColor: '#179B16'
      },
      default: {
        borderRadius: borderRadius,
        textColor: palette.textColor,
        backgroundColor: '#F7F7F7'
      },
      warn: {
        borderRadius: borderRadius,
        textColor: palette.textColor,
        backgroundColor: '#E64340'
      }
    }
  }, noneUiTheme)
}
