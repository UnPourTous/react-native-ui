'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _reactNavigation = require('../react-navigation/react-navigation.web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var NavigationLinks = function NavigationLinks(_ref) {
  var navigation = _ref.navigation;
  var className = _ref.className;
  var reverse = _ref.reverse;

  var links = [].concat(_toConsumableArray(navigation.state.routes.map(function (route, i) {
    if (route.routeName === 'Home' || route.routeName === 'NotFound') {
      return null;
    }
    return _react2.default.createElement(
      _Link2.default,
      {
        to: route.routeName,
        className: i === navigation.state.index ? 'active' : '',
        key: route.routeName
      },
      route.routeName
    );
  })), [_react2.default.createElement(
    'a',
    { href: 'https://github.com/react-community/react-navigation', key: 'github' },
    'GitHub'
  )]);
  if (reverse) {
    links = links.reverse();
  }
  return _react2.default.createElement(
    'div',
    { className: className },
    links
  );
};

var AppFrame = function (_React$Component) {
  _inherits(AppFrame, _React$Component);

  function AppFrame() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AppFrame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AppFrame.__proto__ || Object.getPrototypeOf(AppFrame)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { isMobileMenuOpen: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppFrame, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.navigation.state !== props.navigation.state) {
        this.setState({ isMobileMenuOpen: false });
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var navigation = _props.navigation;
      var router = _props.router;
      var isMobileMenuOpen = this.state.isMobileMenuOpen;

      var childNavigation = (0, _reactNavigation.addNavigationHelpers)(_extends({}, navigation, {
        state: navigation.state.routes[navigation.state.index]
      }));
      var state = navigation.state;

      var ScreenView = router.getComponentForRouteName(state.routes[state.index].routeName);
      var routes = state.routes;
      var index = state.index;

      var route = routes[index];
      var hasChildNavigation = !!route.routes;
      return _react2.default.createElement(
        'div',
        { className: 'main-app ' + (isMobileMenuOpen ? 'mobileMenuActive' : '') },
        _react2.default.createElement(
          'nav',
          { className: 'pt-navbar', id: 'navbar' },
          _react2.default.createElement(
            'div',
            { className: 'inner-navbar' },
            _react2.default.createElement(
              _Link2.default,
              {
                className: 'pt-navbar-group pt-align-left project-title',
                to: 'Home'
              },
              _react2.default.createElement('img', {
                src: '/assets/react-nav-logo.svg',
                role: 'presentation',
                className: 'logo'
              }),
              _react2.default.createElement(
                'h1',
                { className: 'pt-navbar-heading' },
                'React Native UI'
              )
            ),
            _react2.default.createElement(NavigationLinks, { navigation: navigation, className: 'navbuttons' }),
            hasChildNavigation && _react2.default.createElement('span', {
              className: 'pt-icon-properties openMenuButton ' + (isMobileMenuOpen ? 'active' : ''),
              onClick: function onClick() {
                _this2.setState(function (s) {
                  return {
                    isMobileMenuOpen: !s.isMobileMenuOpen
                  };
                });
                window.scrollTo(0, 0);
              }
            })
          )
        ),
        _react2.default.createElement(NavigationLinks, {
          navigation: navigation,
          className: 'mobile-navbuttons',
          reverse: true
        }),
        _react2.default.createElement(ScreenView, { navigation: childNavigation }),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return AppFrame;
}(_react2.default.Component);

exports.default = AppFrame;