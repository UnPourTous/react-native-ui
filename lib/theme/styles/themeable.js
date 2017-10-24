'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createTheme = require('./createTheme');

var _createTheme2 = _interopRequireDefault(_createTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var getDisplayName = function getDisplayName(c) {
    return c.displayName || c.name || 'Component';
  };
  return function (Component) {
    var WrappedComponent = function WrappedComponent(props, context) {
      var _context$theme = context.theme,
          theme = _context$theme === undefined ? (0, _createTheme2.default)() : _context$theme;

      return _react2.default.createElement(Component, _extends({ theme: theme }, props));
    };
    WrappedComponent.contextTypes = {
      theme: _propTypes2.default.object
    };
    WrappedComponent.displayName = getDisplayName(Component);
    return WrappedComponent;
  };
};