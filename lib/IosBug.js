'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IosBug = function (_Component) {
  _inherits(IosBug, _Component);

  function IosBug(props) {
    _classCallCheck(this, IosBug);

    var _this = _possibleConstructorReturn(this, (IosBug.__proto__ || Object.getPrototypeOf(IosBug)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBug, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style, {
        color: this.props.color,
        fontSize: this.props.fontSize
      });

      return _react2.default.createElement(
        _SVG2.default,
        {
          style: this.props.style,
          className: this._getClasses(),
          fill: this.props.color,
          width: this.props.fontSize,
          height: this.props.fontSize,
          viewBox: '0 0 1024 1024',
          onClick: this.props.onClick,
          rotate: this.props.rotate ? 1 : 0,
          shake: this.props.shake ? 1 : 0,
          beat: this.props.beat ? 1 : 0
        },
        _react2.default.createElement('path', { d: 'M749.2 254.6c-58.4-77.6-143-126.6-237.2-126.6s-178.8 49-237.2 126.6c12.8 31.2 31.6 60 56.2 84.6 48.4 48.4 112.6 75 181 75s132.6-26.6 181-75c24.6-24.6 43.6-53.2 56.2-84.6z M253.6 285.6c-3.4 5.6-6.8 11.4-10 17.2-5.8-3.6-10.6-7.4-15.4-11.6-2.4-2-6-7.8-9-14.8 10.8-22.6 2.4-50-19.8-62.6-23.2-13-52.4-4.8-65.4 18.4s-4.8 52.4 18.4 65.4c2.6 1.4 5 2.6 7.6 3.4 5.6 12.6 14.6 28.6 27 39 8.4 7 17.6 14.2 30.4 21.4-14.4 40.6-23.2 84.6-25 130.8-22 0.4-37.2 4.2-51 8.2-8.4 2.4-16.4 6.8-23.6 11.8-2-0.2-3.8-0.4-5.8-0.4-26.6 0-48 21.4-48 48s21.4 48 48 48c25.8 0 47-20.4 48-46 10-3 19.8-5.4 34.2-5.6 6.4 66 26.6 127 57.2 178.4-28.4 22-45.8 46-53.2 72.6 0 0-1.6 0.8-3.8 2.8-2 1.6-3.8 3.2-5.6 5.2-17.8 19.8-16.2 50 3.6 67.8s50 16.2 67.8-3.6c16.2-18 16.2-44.8 1.2-62.8 6.2-11.2 12.4-18 27.4-30 54.2 63.4 126.8 104 207.4 108.8v-449.6c-106.6-5.8-197.8-69.6-242.6-160.2z M912 512.2c-2 0-4 0.2-5.8 0.4-7.2-5-15.4-9.2-23.6-11.8-13.8-4-28.8-7.8-51-8.2-2-46.2-10.8-90.4-25-130.8 12.8-7.2 22-14.4 30.4-21.4 12.4-10.4 21.4-26.6 27-39 2.6-1 5.2-2 7.6-3.4 23.2-13 31.4-42.2 18.4-65.4s-42.2-31.4-65.4-18.4c-22.2 12.4-30.6 39.8-19.8 62.6-3.2 6.8-6.8 12.8-9 14.8-4.8 4-9.6 7.8-15.4 11.6-3.2-5.8-6.6-11.6-10-17.2-44.8 90.6-135.8 154.2-242.4 160v450c80.6-4.8 153.2-45.6 207.4-108.8 14.8 11.8 21.2 18.8 27.4 30-15 18-15 44.8 1.2 62.8 17.8 19.8 48 21.4 67.8 3.6s21.4-48 3.6-67.8c-1.8-2-3.6-3.6-5.6-5.2-2.2-1.8-3.8-2.8-3.8-2.8-7.4-26.6-24.8-50.6-53.2-72.6 30.6-51.4 50.8-112.4 57.2-178.4 14.4 0.2 24 2.6 34.2 5.6 1 25.6 22 46 48 46 26.6 0 48-21.4 48-48s-21.6-48.2-48.2-48.2z' })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      return [].concat(_toConsumableArray(this.state.classNames), [this.props.className]).join(' ');
    }
  }, {
    key: '_getPathByIconName',
    value: function _getPathByIconName() {
      var _this2 = this;

      var icon = icons.find(function (icon) {
        return icon.tags[0] === _this2.props.icon;
      });
      if (icon) return icon.paths.join(' ');
      return '';
    }
  }]);

  return IosBug;
}(_react.Component);

IosBug.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBug.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = IosBug;
module.exports = exports['default'];
//# sourceMappingURL=IosBug.js.map