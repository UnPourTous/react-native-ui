'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneGraphic = function (_Component) {
  _inherits(PhoneGraphic, _Component);

  function PhoneGraphic() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PhoneGraphic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneGraphic.__proto__ || Object.getPrototypeOf(PhoneGraphic)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeExample: _this.props.alt ? 'android' : 'iphone' }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PhoneGraphic, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeExample = this.state.activeExample;

      return _react2.default.createElement(
        'div',
        { className: 'example-section' },
        _react2.default.createElement(
          'div',
          { className: 'buttonbar' },
          _react2.default.createElement(
            'a',
            {
              className: activeExample === 'android',
              onClick: function onClick() {
                return _this2.setState({ activeExample: 'android' });
              }
            },
            'Android'
          ),
          _react2.default.createElement(
            'a',
            {
              className: activeExample === 'iphone',
              onClick: function onClick() {
                return _this2.setState({ activeExample: 'iphone' });
              }
            },
            'iPhone'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'phone' },
          _react2.default.createElement(
            'div',
            { className: 'android ' + String(activeExample === 'android') },
            _react2.default.createElement('img', { src: this.props.sources.android, role: 'presentation' })
          ),
          _react2.default.createElement('div', { className: 'phone-example-spacer' }),
          _react2.default.createElement(
            'div',
            { className: 'iphone ' + String(activeExample === 'iphone') },
            _react2.default.createElement('img', { src: this.props.sources.iphone, role: 'presentation' })
          )
        )
      );
    }
  }]);

  return PhoneGraphic;
}(_react.Component);

exports.default = PhoneGraphic;