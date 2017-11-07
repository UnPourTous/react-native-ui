'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _reactNavigation = require('../react-navigation/react-navigation.web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkableLi = _Link2.default.Linkable(function (props) {
  return _react2.default.createElement('li', props);
});

function getConfig(router, state, action, configName) {
  if (action) {
    state = router.getStateForAction(action, state);
  }
  var Component = router.getComponentForState(state);
  return Component.navigationOptions[configName];
}

var PageWithSidebar = function (_Component) {
  _inherits(PageWithSidebar, _Component);

  function PageWithSidebar() {
    _classCallCheck(this, PageWithSidebar);

    return _possibleConstructorReturn(this, (PageWithSidebar.__proto__ || Object.getPrototypeOf(PageWithSidebar)).apply(this, arguments));
  }

  _createClass(PageWithSidebar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var router = _props.router;
      var navigation = _props.navigation;
      var dispatch = navigation.dispatch;
      var state = navigation.state;

      var ActiveScreen = router.getComponentForState(state);
      var prevAction = null;
      if (state.routes[state.index].index > 0) {
        var prev = state.routes[state.index].index - 1;
        prevAction = _reactNavigation.NavigationActions.navigate({
          routeName: state.routes[state.index].routes[prev].routeName
        });
      }
      if (!prevAction && state.index > 0) {
        var _prev = state.index - 1;
        prevAction = _reactNavigation.NavigationActions.navigate({
          routeName: state.routes[_prev].routeName,
          action: _reactNavigation.NavigationActions.navigate({
            routeName: state.routes[_prev].routes[state.routes[_prev].routes.length - 1].routeName
          })
        });
      }
      var nextAction = null;
      if (state.routes[state.index].index < state.routes[state.index].routes.length - 1) {
        var next = state.routes[state.index].index + 1;
        nextAction = _reactNavigation.NavigationActions.navigate({
          routeName: state.routes[state.index].routes[next].routeName
        });
      }
      if (!nextAction && state.index < state.routes.length - 1) {
        var _next = state.index + 1;
        nextAction = _reactNavigation.NavigationActions.navigate({
          routeName: state.routes[_next].routeName
        });
      }
      var prevName = prevAction && getConfig(router, state, prevAction, 'linkName');
      var nextName = nextAction && getConfig(router, state, nextAction, 'linkName');
      var docPath = getConfig(router, state, null, 'doc') + '.md';
      return _react2.default.createElement(
        'div',
        { className: 'page-body' },
        _react2.default.createElement(
          'div',
          { className: 'inner-page-body' },
          _react2.default.createElement(
            'div',
            { className: 'left-sidebar' },
            _react2.default.createElement(
              'ul',
              { className: 'pt-menu pt-elevation-1 navmenu' },
              state.routes && state.routes.map(function (route, i) {
                var DocComponent = router.getComponentForRouteName(route.routeName);
                var childNavigation = (0, _reactNavigation.addNavigationHelpers)({
                  state: route,
                  dispatch: dispatch
                });
                var options = router.getScreenOptions(childNavigation, {});
                var isActive = state.index === i;
                return _react2.default.createElement(
                  'span',
                  { key: i },
                  _react2.default.createElement(
                    LinkableLi,
                    {
                      to: route.routeName,
                      className: 'pt-menu-header ' + options.icon + ' ' + (isActive ? 'active' : '')
                    },
                    _react2.default.createElement(
                      'h6',
                      null,
                      options.linkName
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    route.routes && route.routes.map(function (childRoute, childI) {
                      var isChildActive = isActive && route.index === childI;
                      var secondChildNavigation = (0, _reactNavigation.addNavigationHelpers)({
                        state: childRoute,
                        dispatch: dispatch
                      });
                      var secondOptions = DocComponent.router && DocComponent.router.getScreenOptions(secondChildNavigation, {});
                      var routerLinkName = secondOptions && secondOptions.linkName;
                      var linkName = routerLinkName || childRoute.routeName;
                      return _react2.default.createElement(
                        _Link2.default,
                        {
                          to: childRoute.routeName,
                          className: 'pt-menu-item page ' + (isChildActive ? 'active' : ''),
                          key: childI
                        },
                        linkName
                      );
                    })
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'main-section' },
            _react2.default.createElement(ActiveScreen, { navigation: this.props.navigation }),
            _react2.default.createElement('hr', null),
            state.routeName === 'Docs' && _react2.default.createElement(
              _Link2.default,
              {
                href: 'https://github.com/react-community/react-navigation/tree/master/docs/' + docPath,
                className: 'editLink'
              },
              ' ',
              'Edit on GitHub'
            ),
            prevAction && _react2.default.createElement(
              _Link2.default,
              { to: prevAction },
              'Previous: ',
              prevName
            ),
            nextAction && _react2.default.createElement(
              _Link2.default,
              { to: nextAction, className: 'nextLink' },
              'Next: ',
              nextName
            )
          )
        )
      );
    }
  }]);

  return PageWithSidebar;
}(_react.Component);

exports.default = PageWithSidebar;