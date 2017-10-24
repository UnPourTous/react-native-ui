'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _theme = require('../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _context$theme$flatBu = this.context.theme.flatButton,
          borderRadius = _context$theme$flatBu.borderRadius,
          textColor = _context$theme$flatBu.textColor,
          backgroundColor = _context$theme$flatBu.backgroundColor;
      var _props = this.props,
          title = _props.title,
          onPress = _props.onPress;


      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          onPress: onPress },
        _react2.default.createElement(
          _reactNative.View,
          {
            style: [{
              borderRadius: borderRadius,
              height: 50,
              paddingLeft: 50,
              paddingRight: 50,
              backgroundColor: backgroundColor,
              alignItems: 'center',
              justifyContent: 'center'
            }, this.props.style] },
          _react2.default.createElement(
            _reactNative.Text,
            { style: {
                color: textColor
              } },
            title
          )
        )
      );
    }

    // static defaultProps = {
    //   backgroundColor: '#20a0ff'
    // }

  }]);

  return Button;
}(_react.Component);

Button.propsType = {
  title: _react.PropTypes.string.isRequired,
  style: _reactNative.View.propTypes.style };
Button.contextTypes = {
  theme: _react.PropTypes.object.isRequired
};
exports.default = (0, _theme.themeble)()(Button);