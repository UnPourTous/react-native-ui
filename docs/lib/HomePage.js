'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _PhoneGraphic = require('./PhoneGraphic');

var _PhoneGraphic2 = _interopRequireDefault(_PhoneGraphic);

var _CodeBlock = require('./CodeBlock');

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GettingStartedButton = function GettingStartedButton() {
  return _react2.default.createElement(
    'div',
    { className: 'cta-row' },
    _react2.default.createElement(
      _Link2.default,
      { className: 'cta', to: 'GettingStarted' },
      _react2.default.createElement(
        'span',
        { className: 'label' },
        'Get Started'
      ),
      _react2.default.createElement('span', { className: 'icon pt-icon-arrow-right' })
    )
  );
};

var ExampleCodeBrowser = function ExampleCodeBrowser(config, ExampleFiles) {
  var fileNames = Object.keys(ExampleFiles);

  var CodeBrowser = function (_Component) {
    _inherits(CodeBrowser, _Component);

    function CodeBrowser() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CodeBrowser);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeBrowser.__proto__ || Object.getPrototypeOf(CodeBrowser)).call.apply(_ref, [this].concat(args))), _this), _this.state = { index: 0 }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CodeBrowser, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var index = this.state.index;

        return _react2.default.createElement(
          'div',
          { className: this.props.alt ? 'code-example alt' : 'code-example' },
          _react2.default.createElement(
            'div',
            { className: 'code-example-section' },
            _react2.default.createElement(
              'div',
              { className: 'code-section' },
              _react2.default.createElement(
                'div',
                { className: 'code-browser-bar' },
                fileNames.map(function (fileName, i) {
                  return _react2.default.createElement(
                    'a',
                    {
                      key: fileName,
                      className: index === i ? 'active' : '',
                      onClick: function onClick() {
                        return _this2.setState({ index: i });
                      }
                    },
                    fileName
                  );
                })
              ),
              _react2.default.createElement(_CodeBlock2.default, { code: ExampleFiles[fileNames[index]] })
            ),
            _react2.default.createElement(_PhoneGraphic2.default, { sources: config.examples, alt: this.props.alt })
          )
        );
      }
    }]);

    return CodeBrowser;
  }(_react.Component);

  return CodeBrowser;
};

var StackExampleBrowser = ExampleCodeBrowser({
  title: 'Stack Navigator',
  examples: {
    iphone: '/assets/iphone-stack.gif',
    android: '/assets/android-stack.gif'
  }
}, {
  'BasicApp.js': 'import {\n  StackNavigator,\n} from \'react-navigation\';\n\nconst BasicApp = StackNavigator({\n  Main: {screen: MainScreen},\n  Profile: {screen: ProfileScreen},\n});\n',
  'MainScreen.js': 'class MainScreen extends React.Component {\n  static navigationOptions = {\n    title: \'Welcome\',\n  };\n  render() {\n    const { navigate } = this.props.navigation;\n    return (\n      <Button\n        title="Go to Jane\'s profile"\n        onPress={() =>\n          navigate(\'Profile\', { name: \'Jane\' })\n        }\n      />\n    );\n  }\n}',
  'ProfileScreen.js': 'class ProfileScreen extends React.Component {\n  static navigationOptions = ({navigation}) => ({\n    title: navigation.state.params.name,\n  });\n  render() {\n    const { goBack } = this.props.navigation;\n    return (\n      <Button\n        title="Go back"\n        onPress={() => goBack()}\n      />\n    );\n  }\n}'
});

var TabExampleBrowser = ExampleCodeBrowser({
  title: 'Tab Navigator',
  examples: {
    iphone: '/assets/iphone-tabs.gif',
    android: '/assets/android-tabs.gif'
  }
}, {
  'BasicApp.js': 'import {\n  TabNavigator,\n} from \'react-navigation\';\n\nconst BasicApp = TabNavigator({\n  Main: {screen: MainScreen},\n  Setup: {screen: SetupScreen},\n});\n',
  'MainScreen.js': 'class MainScreen extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: \'Home\',\n  };\n  render() {\n    const { navigate } = this.props.navigation;\n    return (\n      <Button\n        title="Go to Setup Tab"\n        onPress={() => navigate(\'Setup\')}\n      />\n    );\n  }\n}',
  'SetupScreen.js': 'class SetupScreen extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: \'Setup\',\n  };\n  render() {\n    const { goBack } = this.props.navigation;\n    return (\n      <Button\n        title="Go back to home tab"\n        onPress={() => goBack()}\n      />\n    );\n  }\n}'
});

var HomePage = function (_Component2) {
  _inherits(HomePage, _Component2);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home-container' },
        _react2.default.createElement('div', { className: 'hero-bg' }),
        _react2.default.createElement(
          'div',
          { className: 'home-body' },
          _react2.default.createElement(
            'div',
            { className: 'hero' },
            _react2.default.createElement(
              'h1',
              null,
              'Navigation for React Native'
            ),
            _react2.default.createElement(
              'div',
              { className: 'video' },
              _react2.default.createElement('iframe', {
                src: 'https://player.vimeo.com/video/201061589',
                width: '720',
                height: '410',
                frameBorder: '0',
                allowFullScreen: true
              })
            ),
            _react2.default.createElement(GettingStartedButton, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
              'div',
              { className: 'section-inner' },
              _react2.default.createElement(
                'h1',
                null,
                'Easy-to-Use Navigators'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Start quickly with built-in navigators that deliver a seamless out-of-the box experience.'
              ),
              _react2.default.createElement(StackExampleBrowser, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'section alt' },
            _react2.default.createElement(
              'div',
              { className: 'section-inner' },
              _react2.default.createElement(
                'h1',
                null,
                'Components built for iOS and Android'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Navigation views that deliver 60fps animations, and utilize native components to deliver a great look and feel.'
              ),
              _react2.default.createElement(TabExampleBrowser, { alt: true })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
              'div',
              { className: 'section-inner' },
              _react2.default.createElement(
                'h1',
                null,
                'Routers built for the future'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Routers define the relationship between URIs, actions, and navigation state. Share navigation logic between mobile apps, web apps, and server rendering.'
              ),
              _react2.default.createElement(GettingStartedButton, null)
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        ),
        _react2.default.createElement('div', { className: 'hero-screen' })
      );
    }
  }]);

  return HomePage;
}(_react.Component);

HomePage.navigationOptions = {
  title: 'React Native UI'
};
exports.default = HomePage;