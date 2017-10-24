'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTheme;

var _LightTheme = require('./preset-themes/LightTheme');

var _LightTheme2 = _interopRequireDefault(_LightTheme);

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a new theme object base on default theme and input theme
 *
 * @export
 * @param {object} theme
 * @param {object} more
 * @returns {object}
 */
function createTheme() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    more[_key - 1] = arguments[_key];
  }

  var noneUiTheme = _lodash2.default.apply(undefined, [{}, _LightTheme2.default, theme].concat(more));

  var borderRadius = noneUiTheme.borderRadius,
      palette = noneUiTheme.palette,
      fontFamily = noneUiTheme.fontFamily;

  return (0, _lodash2.default)({
    flatButton: {
      borderRadius: borderRadius,
      textColor: palette.textColor,
      backgroundColor: palette.primaryColor
    }
  }, noneUiTheme);
}