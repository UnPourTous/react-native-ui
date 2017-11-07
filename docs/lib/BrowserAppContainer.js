'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function getAction(router, path, params) {
  var action = router.getActionForPathAndParams(path, params);
  if (action) {
    return action;
  }
  return _reactNavigation.NavigationActions.navigate({
    params: { path: path },
    routeName: 'NotFound'
  });
}

exports.default = function (NavigationAwareView) {
  var initialAction = getAction(NavigationAwareView.router, window.location.pathname.substr(1));
  var initialState = NavigationAwareView.router.getStateForAction(initialAction);
  console.log({ initialAction: initialAction, initialState: initialState });

  var NavigationContainer = function (_React$Component) {
    _inherits(NavigationContainer, _React$Component);

    function NavigationContainer() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, NavigationContainer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavigationContainer.__proto__ || Object.getPrototypeOf(NavigationContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = initialState, _this.dispatch = function (action) {
        var state = NavigationAwareView.router.getStateForAction(action, _this.state);

        if (!state) {
          console.log('Dispatched action did not change state: ', { action: action });
        } else if (console.group) {
          console.group('Navigation Dispatch: ');
          console.log('Action: ', action);
          console.log('New State: ', state);
          console.log('Last State: ', _this.state);
          console.groupEnd();
        } else {
          console.log('Navigation Dispatch: ', {
            action: action,
            newState: state,
            lastState: _this.state
          });
        }

        if (!state) {
          return true;
        }

        if (state !== _this.state) {
          _this.setState(state);
          return true;
        }
        return false;
      }, _this.getURIForAction = function (action) {
        var state = NavigationAwareView.router.getStateForAction(action, _this.state) || _this.state;

        var _NavigationAwareView$ = NavigationAwareView.router.getPathAndParamsForState(state);

        var path = _NavigationAwareView$.path;

        return '/' + path;
      }, _this.getActionForPathAndParams = function (path, params) {
        return NavigationAwareView.router.getActionForPathAndParams(path, params);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NavigationContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var navigation = (0, _reactNavigation.addNavigationHelpers)({
          state: this.state.routes[this.state.index],
          dispatch: this.dispatch
        });
        document.title = NavigationAwareView.router.getScreenOptions(navigation).title;
        window.onpopstate = function (e) {
          e.preventDefault();
          var action = getAction(NavigationAwareView.router, window.location.pathname.substr(1));
          if (action) _this2.dispatch(action);
        };
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(props, state) {
        var _NavigationAwareView$2 = NavigationAwareView.router.getPathAndParamsForState(state);

        var path = _NavigationAwareView$2.path;
        var params = _NavigationAwareView$2.params;

        var maybeHash = params && params.hash ? '#' + params.hash : '';
        var uri = '/' + path + maybeHash;
        if (window.location.pathname !== uri) {
          window.history.pushState({}, state.title, uri);
        }
        var navigation = (0, _reactNavigation.addNavigationHelpers)({
          state: state.routes[state.index],
          dispatch: this.dispatch
        });
        document.title = NavigationAwareView.router.getScreenOptions(navigation).title;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _NavigationAwareView$3 = NavigationAwareView.router.getPathAndParamsForState(this.state);

        var params = _NavigationAwareView$3.params;

        if (params && params.hash) {
          document.getElementById(params.hash).scrollIntoView();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(NavigationAwareView, {
          navigation: (0, _reactNavigation.addNavigationHelpers)({
            state: this.state,
            dispatch: this.dispatch
          })
        });
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          getActionForPathAndParams: this.getActionForPathAndParams,
          getURIForAction: this.getURIForAction,
          dispatch: this.dispatch
        };
      }
    }]);

    return NavigationContainer;
  }(_react2.default.Component);

  NavigationContainer.childContextTypes = {
    getActionForPathAndParams: _propTypes2.default.func.isRequired,
    getURIForAction: _propTypes2.default.func.isRequired,
    dispatch: _propTypes2.default.func.isRequired
  };

  return NavigationContainer;
};