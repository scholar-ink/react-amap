'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AMapContainer = undefined;

var _amapLoader = require('./services/amapLoader');

var _AMap = require('./components/AMap');

var _AMap2 = _interopRequireDefault(_AMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by zhouchao on 16/12/8.
 */
exports.default = {
  initAMapLoader: _amapLoader.initAMapLoader
};
var AMapContainer = exports.AMapContainer = _AMap2.default;