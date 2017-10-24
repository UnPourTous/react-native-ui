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
    flatButton: {
      borderRadius: borderRadius,
      textColor: palette.textColor,
      backgroundColor: palette.primaryColor
    }
  }, noneUiTheme)
}
