'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import HomePage from './HomePage';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppFrame = require('./AppFrame');

var _AppFrame2 = _interopRequireDefault(_AppFrame);

var _PageWithSidebar = require('./PageWithSidebar');

var _PageWithSidebar2 = _interopRequireDefault(_PageWithSidebar);

var _MDPage = require('./MDPage');

var _MDPage2 = _interopRequireDefault(_MDPage);

var _reactNavigation = require('../react-navigation/react-navigation.web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavView = function NavView(_ref) {
  var navigation = _ref.navigation;
  var router = _ref.router;
  var state = navigation.state;

  var Component = router.getComponentForState(state);
  return _react2.default.createElement(Component, {
    navigation: (0, _reactNavigation.addNavigationHelpers)(_extends({}, navigation, {
      state: state.routes[state.index]
    }))
  });
};

var createDocPage = function createDocPage(config) {
  var Page = function Page(_ref2) {
    var navigation = _ref2.navigation;
    return _react2.default.createElement(_MDPage2.default, { docPath: config.doc, navigation: navigation });
  };
  Page.navigationOptions = {
    doc: config.doc,
    title: config.title,
    linkName: config.linkName
  };
  return Page;
};

var GuideDocs = (0, _reactNavigation.createNavigator)((0, _reactNavigation.TabRouter)({
  GettingStarted: {
    screen: createDocPage({
      doc: 'guides/Guide-Intro',
      title: 'Hello React-Native-UI', // browser title
      linkName: 'Hello React-Native-UI'
    }),
    path: ''
  }
}))(NavView);

GuideDocs.navigationOptions = {
  linkName: 'Getting Started',
  icon: 'pt-icon-flows'
};

var ButtonDocs = (0, _reactNavigation.createNavigator)((0, _reactNavigation.TabRouter)({
  Button: {
    screen: createDocPage({
      doc: 'api/button/Button1',
      title: 'Button1', // browser title
      linkName: 'Button1'
    }),
    path: 'button1'
  },
  Button2: {
    screen: createDocPage({
      doc: 'api/button/Button2',
      title: 'Button2', // browser title
      linkName: 'Button2'
    }),
    path: 'button2'
  }
}))(NavView);

ButtonDocs.navigationOptions = {
  linkName: 'Button',
  icon: 'pt-icon-flows'
};

var PopupDocs = (0, _reactNavigation.createNavigator)((0, _reactNavigation.TabRouter)({
  Dialog: {
    screen: createDocPage({
      doc: 'api/popup/Dialog',
      title: 'Button', // browser title
      linkName: 'Button'
    }),
    path: 'button'
  },
  Toast: {
    screen: createDocPage({
      doc: 'api/popup/Toast',
      title: 'Toast', // browser title
      linkName: 'Toast'
    }),
    path: 'toast'
  },
  ActionSheet: {
    screen: createDocPage({
      doc: 'api/popup/ActionSheet',
      title: 'ActionSheet', // browser title
      linkName: 'ActionSheet'
    }),
    path: 'actions-sheet'
  },
  Custom: {
    screen: createDocPage({
      doc: 'api/popup/Custom',
      title: 'Custom', // browser title
      linkName: 'Custom'
    }),
    path: 'custom'
  },
  Animation: {
    screen: createDocPage({
      doc: 'api/popup/Animation',
      title: 'Animation', // browser title
      linkName: 'Animation'
    }),
    path: 'animation'
  }
}))(NavView);

PopupDocs.navigationOptions = {
  linkName: 'Popup',
  icon: 'pt-icon-briefcase'
};

var DocsPage = (0, _reactNavigation.createNavigator)((0, _reactNavigation.TabRouter)({
  GuideDocs: {
    screen: GuideDocs,
    path: 'intro'
  },
  ButtonTab: {
    screen: ButtonDocs,
    path: 'button'
  },
  PopupTab: {
    screen: PopupDocs,
    path: 'popup'
  }
}))(_PageWithSidebar2.default);
DocsPage.navigationOptions = function (_ref3) {
  var navigationOptions = _ref3.navigationOptions;
  return {
    title: navigationOptions.title + ' | React Navigation'
  };
};

var NotFoundError = function NotFoundError() {
  return _react2.default.createElement(
    'div',
    { className: 'errorScreen' },
    _react2.default.createElement(
      'h1',
      null,
      'Page not found'
    )
  );
};

var App = (0, _reactNavigation.createNavigator)((0, _reactNavigation.TabRouter)({
  // Home: {
  //   screen: HomePage,
  //   path: '',
  // },
  Docs: {
    screen: DocsPage,
    path: 'docs'
  },
  // Blog: {
  //   screen: BlogPage,
  //   path: 'blog',
  // },
  NotFound: {
    screen: NotFoundError,
    navigationOptions: {
      title: 'Page Not Found | React Navigation'
    }
  }
}))(_AppFrame2.default);

exports.default = App;