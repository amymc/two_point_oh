'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clock = require('./clock');

var _clock2 = _interopRequireDefault(_clock);

var _titlebar = require('./titlebar');

var _titlebar2 = _interopRequireDefault(_titlebar);

require('../styles/components/startbar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartBar = function (_React$Component) {
  _inherits(StartBar, _React$Component);

  function StartBar(props) {
    _classCallCheck(this, StartBar);

    var _this = _possibleConstructorReturn(this, (StartBar.__proto__ || Object.getPrototypeOf(StartBar)).call(this, props));

    _this.renderTitleBar = _this.renderTitleBar.bind(_this);
    return _this;
  }

  _createClass(StartBar, [{
    key: 'renderTitleBar',
    value: function renderTitleBar() {
      var _this2 = this;

      return this.props.openProjects.map(function (project, index) {
        return _react2.default.createElement(_titlebar2.default, { key: index, project: project, selectedProject: _this2.props.selectedProject });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'startbar' },
        _react2.default.createElement(
          'button',
          { className: 'startbar__button' + (this.props.active ? ' startbar__button--active' : ''), onClick: function onClick() {
              return _this3.props.onClick();
            } },
          _react2.default.createElement('img', { className: 'startbar__button-icon', src: 'assets/favicon-16x16.png', alt: 'start icon' }),
          _react2.default.createElement(
            'span',
            { className: 'startbar__button-text' },
            ' Start '
          )
        ),
        this.props.openProjects ? this.renderTitleBar() : null,
        _react2.default.createElement(_clock2.default, null)
      );
    }
  }]);

  return StartBar;
}(_react2.default.Component);

exports.default = StartBar;