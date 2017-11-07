'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _BrowserAppContainer = require('./BrowserAppContainer');

var _BrowserAppContainer2 = _interopRequireDefault(_BrowserAppContainer);

require('./prism.css');

require('./App.css');

require('@blueprintjs/core/dist/blueprint.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientApp = (0, _BrowserAppContainer2.default)(_App2.default);

_reactDom2.default.render(_react2.default.createElement(ClientApp, null), document.getElementById('root'));