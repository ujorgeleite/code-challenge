webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<main class=\"\">\n\t<section class=\"\">\n        <h1>Começando</h1>\n\t</section>\n</main>"

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angularUiRouter = __webpack_require__(20);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

__webpack_require__(64);

var _truckControlPanel = __webpack_require__(97);

var _truckControlPanel2 = _interopRequireDefault(_truckControlPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', [_truckControlPanel2.default, _angularUiRouter2.default]);

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(14);

var _angular2 = _interopRequireDefault(_angular);

__webpack_require__(21);

__webpack_require__(66);

__webpack_require__(67);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = TruckControlPanelController;
TruckControlPanelController.$inject = ['$interval'];

function TruckControlPanelController($interval) {
	var vm = this;
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

__webpack_require__(64);

var _angularUiRouter = __webpack_require__(20);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _routes = __webpack_require__(98);

var _routes2 = _interopRequireDefault(_routes);

var _TruckControlPanelController = __webpack_require__(96);

var _TruckControlPanelController2 = _interopRequireDefault(_TruckControlPanelController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TruckControlPanel = angular.module('app.truck-control-panel', [_angularUiRouter2.default]).config(_routes2.default).controller('TruckControlPanelController', _TruckControlPanelController2.default);

exports.default = TruckControlPanel.name;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = route;
route.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

function route($stateProvider, $urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider.state('truck', {
        cache: false,
        url: '/',
        controller: 'TruckControlPanelController',
        controllerAs: 'truckCtrl',
        template: __webpack_require__(100)
    });
}

/***/ })

},[95]);