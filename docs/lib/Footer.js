'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'inner-footer' },
      _react2.default.createElement(
        'section',
        { className: 'copyright' },
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/react-community/react-navigation' },
          'React Navigation'
        ),
        '\xB7',
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/react-community/react-navigation/blob/master/LICENSE' },
          'Distributed under BSD License'
        )
      )
    )
  );
};

exports.default = Footer;