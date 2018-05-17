'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

var glamor = _interopRequireWildcard(_glamor);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          radius = _props.radius,
          style = _props.style;


      var AnimatedSVG = _glamorous2.default.svg({
        display: 'inline-block',
        width: (!radius ? 40 : radius) + 'px',
        height: (!radius ? 40 : radius) + 'px',
        animation: glamor.css.keyframes({
          '100%': { transform: 'rotate(360deg)' }
        }) + ' 900ms linear infinite'
      });

      var Styles = {
        circle: {
          stroke: '#979797',
          strokeOpacity: '0.25'
        },
        segment: {
          stroke: !color ? '#979797' : color
        }
      };

      return _react2.default.createElement(
        'span',
        { style: style },
        _react2.default.createElement(
          AnimatedSVG,
          { viewBox: '0 0 42 42' },
          _react2.default.createElement(
            'g',
            {
              fill: 'none',
              transform: 'translate(3 3)',
              strokeWidth: '3' },
            _react2.default.createElement('circle', {
              style: Styles.circle,
              cx: '18',
              cy: '18',
              r: '18' }),
            _react2.default.createElement('path', {
              style: Styles.segment,
              d: 'M36 18c0-9.94-8.06-18-18-18',
              strokeLinecap: 'round',
              strokeLinejoin: 'round' })
          )
        )
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

exports.default = Spinner;
//# sourceMappingURL=index.js.map