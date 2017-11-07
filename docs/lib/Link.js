'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNavigation = require('../react-navigation/react-navigation.web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var Linkable = function Linkable(Inner) {
  var LinkableWrapped = function (_Component) {
    _inherits(LinkableWrapped, _Component);

    function LinkableWrapped() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, LinkableWrapped);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkableWrapped.__proto__ || Object.getPrototypeOf(LinkableWrapped)).call.apply(_ref, [this].concat(args))), _this), _this.getAction = function () {
        var _this$props = _this.props;
        var to = _this$props.to;
        var href = _this$props.href;

        if (typeof to === 'string') {
          return _reactNavigation.NavigationActions.navigate({ routeName: to });
        } else if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && typeof to.type === 'string') {
          return to;
        } else if (href) {
          var match = href.match(/^\/(.*)/);
          if (match) {
            var pathParts = match[1].split('#');
            var path = pathParts[0];
            var params = {};
            if (pathParts.length) {
              params.hash = pathParts[1];
            }
            var action = _this.context.getActionForPathAndParams(path, params);
            return action;
          }
          return null;
        }
      }, _this.onClick = function (e) {
        var action = _this.getAction();
        if (!isModifiedEvent(e) && action) {
          _this.context.dispatch(action);
          e.preventDefault();
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LinkableWrapped, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Inner, _extends({ href: this.getURL(), onClick: this.onClick }, this.props));
      }
    }, {
      key: 'getURL',
      value: function getURL() {
        var action = this.getAction();
        if (!action) return '#';
        return this.context.getURIForAction(action);
      }
    }]);

    return LinkableWrapped;
  }(_react.Component);

  LinkableWrapped.contextTypes = {
    dispatch: _propTypes2.default.func.isRequired,
    getURIForAction: _propTypes2.default.func.isRequired,
    getActionForPathAndParams: _propTypes2.default.func.isRequired
  };

  return LinkableWrapped;
};

var Link = Linkable(function (props) {
  return _react2.default.createElement('a', props);
});

Link.Linkable = Linkable;

exports.default = Link;