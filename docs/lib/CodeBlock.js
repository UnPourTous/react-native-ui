'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

require('prismjs/components/prism-jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeBlock = function CodeBlock(_ref) {
  var code = _ref.code;
  return _react2.default.createElement(
    'pre',
    null,
    _react2.default.createElement('code', {
      dangerouslySetInnerHTML: {
        __html: _prismjs2.default.highlight(code, _prismjs2.default.languages.jsx)
      }
    })
  );
};

exports.default = CodeBlock;