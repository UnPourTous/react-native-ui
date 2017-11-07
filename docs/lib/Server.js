'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _reactNavigation = require('../react-navigation/react-navigation.web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var path = require('path');
var express = require('express');
var fs = require('fs');
var React = require('react');
var PropTypes = require('prop-types');
var join = path.join;
var ReactDOMServer = require('react-dom/server');

var ServerApp = function (_React$Component) {
  _inherits(ServerApp, _React$Component);

  function ServerApp() {
    _classCallCheck(this, ServerApp);

    return _possibleConstructorReturn(this, (ServerApp.__proto__ || Object.getPrototypeOf(ServerApp)).apply(this, arguments));
  }

  _createClass(ServerApp, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dispatch: this.props.navigation.dispatch,
        getURIForAction: function getURIForAction(action) {
          var state = _App2.default.router.getStateForAction(action);

          var _App$router$getPathAn = _App2.default.router.getPathAndParamsForState(state);

          var path = _App$router$getPathAn.path;

          return '/' + path;
        },
        getActionForPathAndParams: _App2.default.router.getActionForPathAndParams
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_App2.default, { navigation: this.props.navigation });
    }
  }]);

  return ServerApp;
}(React.Component);

ServerApp.childContextTypes = {
  getURIForAction: PropTypes.func.isRequired,
  getActionForPathAndParams: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};


var indexHtml = fs.readFileSync(join(__dirname, '../public/index.html'), {
  encoding: 'utf8'
});

function AppHandler(req, res) {
  var status = 200;
  var path = req.url.substr(1);
  var initAction = _App2.default.router.getActionForPathAndParams(path);
  if (!initAction) {
    initAction = _reactNavigation.NavigationActions.navigate({
      routeName: 'NotFound',
      params: { path: path }
    });
    status = 404;
  }
  var topNavigation = (0, _reactNavigation.addNavigationHelpers)({
    state: _App2.default.router.getStateForAction(initAction),
    dispatch: function dispatch(action) {
      return false;
    }
  });
  var screenNavigation = (0, _reactNavigation.addNavigationHelpers)({
    state: topNavigation.state.routes[topNavigation.state.index],
    dispatch: topNavigation.dispatch
  });

  var Component = _App2.default.router.getComponentForState(topNavigation.state);

  var _App$router$getScreen = _App2.default.router.getScreenOptions(screenNavigation, {});

  var title = _App$router$getScreen.title;

  var app = React.createElement(ServerApp, { navigation: topNavigation });
  var body = ReactDOMServer.renderToString(app);
  var html = indexHtml;
  html = html.split('<div id="root"></div>').join('<div id="root">' + body + '</div>');
  if (title) {
    html = html.split('<title></title>').join('<title>' + title + '</title>');
  }
  res.status(status).send(html);
}

var app = express();
app.get('/', AppHandler);
app.use(express.static(join(__dirname, '../public')));
app.get('*', AppHandler);
app.listen(3000, function () {
  console.log('Started on 3000!');
});