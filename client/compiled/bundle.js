webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

module.exports = "<main class=\"\">\n\t<section>\n\t\t<div class=\"title text-center\">\n\t\t\t<h1>Truck Control Panel</h1>\n\t\t</div>\n\t\t<div class=\"row col-md-offset-2\">\n\t\t\t<div class=\"panel panel-default col-md-3 card-panel\" ng-repeat=\"thermostate in panelCtrl.thermostates track by thermostate.codigo\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<h1 class=\"text-center\">{{thermostate.name}}</h1>\n\t\t\t\t\t\t<h2 class=\"text-center\">{{thermostate.temperature}}°C</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"Justified button group\">\n\t\t\t\t<a href=\"#\" class=\"btn btn-default\" role=\"button\">Simulate Door Open</a> \n\t\t\t\t<a href=\"#\" class=\"btn btn-default\" role=\"button\">Simulate Augmented Temperature</a>\n\t\t\t\t<a href=\"#\" class=\"btn btn-default\" role=\"button\">Default Values</a>\n\t\t\t</div>\t\n\t\t</div>\n\t</section>\n</main>"

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angularUiRouter = __webpack_require__(20);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

__webpack_require__(99);

var _panel = __webpack_require__(96);

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', [_panel2.default, _angularUiRouter2.default]);

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(14);

var _angular2 = _interopRequireDefault(_angular);

__webpack_require__(21);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PanelController;

PanelController.$inject = ['ThermostateService'];
function PanelController(ThermostateService) {
  var vm = this;
  vm.thermostates = [];

  ThermostateService.getAllSensorsDefault().then(function (response) {
    vm.thermostates = response.data;
  });
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

__webpack_require__(100);

var _angularUiRouter = __webpack_require__(20);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _routes = __webpack_require__(97);

var _routes2 = _interopRequireDefault(_routes);

var _PanelController = __webpack_require__(95);

var _PanelController2 = _interopRequireDefault(_PanelController);

var _ThermostateService = __webpack_require__(98);

var _ThermostateService2 = _interopRequireDefault(_ThermostateService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = angular.module('app.panel', [_angularUiRouter2.default]).config(_routes2.default).controller('PanelController', _PanelController2.default).service('ThermostateService', _ThermostateService2.default);

exports.default = Panel.name;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = route;
route.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

function route($stateProvider, $urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider.state('panel', {
        cache: false,
        url: '/',
        controller: 'PanelController',
        controllerAs: 'panelCtrl',
        template: __webpack_require__(102)
    });
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThermostateService;
ThermostateService.$inject = ['$http'];

function ThermostateService($http) {
  var service = this;

  service.getAllSensorsRefreshed = function () {
    return $http({
      method: 'GET',
      url: '/api/thermostate/refreshed'
    });
  };

  service.getAllSensorsDefault = function () {
    return $http({
      method: 'GET',
      url: '/api/thermostate/default'
    });
  };

  service.getAllSensorsWithDoorOpen = function () {
    return $http({
      method: 'GET',
      url: '/api/thermostate/simulateTruckMovingDoorOpen'
    });
  };

  service.simulateAugmentedTemperature = function () {
    return $http({
      method: 'PUT',
      url: '/api/thermostate/simulateAugmentedTemperature'
    });
  };
}

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[94]);