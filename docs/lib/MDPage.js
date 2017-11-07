'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _PhoneGraphic = require('./PhoneGraphic');

var _PhoneGraphic2 = _interopRequireDefault(_PhoneGraphic);

var _CodeBlock = require('./CodeBlock');

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = require('react-markdown');
var DocsMD = require('../docs-dist.json');
var slugify = require('slugify');

var safeString = function safeString(s) {
  return slugify(s).replace(/\)/g, '-').replace(/\(/g, '-').replace(/^-/, '').replace(/-$/, '');
};

var getHeadingForLevel = function getHeadingForLevel(level) {
  switch (level) {
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    case 5:
      return 'h5';
    case 6:
      return 'h6';
    case 7:
      return 'h7';
    default:
    case 1:
      return 'h1';
  }
};

var MDPage = function MDPage(_ref) {
  var navigation = _ref.navigation;
  var docPath = _ref.docPath;
  return _react2.default.createElement(Markdown, {
    source: DocsMD[docPath],
    className: 'md-section',
    renderers: {
      CodeBlock: function CodeBlockComponent(_ref2) {
        var literal = _ref2.literal;
        var language = _ref2.language;

        if (language === 'phone-example') {
          var graphicName = literal.trim();
          return _react2.default.createElement(_PhoneGraphic2.default, {
            alt: true,
            sources: {
              iphone: '/assets/examples/' + graphicName + '-iphone.png',
              android: '/assets/examples/' + graphicName + '-android.png'
            }
          });
        }
        return _react2.default.createElement(_CodeBlock2.default, { code: literal });
      },
      Heading: function HeadingComponent(_ref3) {
        var level = _ref3.level;
        var children = _ref3.children;

        var id = _react2.default.Children.map(children, function (child) {
          if (typeof child === 'string') {
            return safeString(child);
          } else if (typeof child.props.children === 'string') {
            return safeString(child.props.children);
          }
        }).join('-');
        var Header = getHeadingForLevel(level);
        var linkHeader = id ? '' : 'link-header';
        var className = 'md-header ' + linkHeader;
        return _react2.default.createElement(
          Header,
          { id: id, className: className },
          children,
          ' ',
          _react2.default.createElement(
            'a',
            { href: '#' + id, title: children },
            '#'
          )
        );
      },
      link: function LinkComponent(_ref4) {
        var children = _ref4.children;
        var href = _ref4.href;

        if (href.indexOf('PhoneGraphic:') === 0) {
          var graphicName = href.split('PhoneGraphic:')[1];
        }
        return _react2.default.createElement(
          _Link2.default,
          { href: href },
          children
        );
      }
    }
  });
};

exports.default = MDPage;