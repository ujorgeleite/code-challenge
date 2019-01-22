webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThermostatRestService;
ThermostatRestService.$inject = ['$http'];

function ThermostatRestService($http) {
  var restService = this;

  restService.getAllSensorsRefreshed = function () {
    return $http({
      method: 'GET',
      url: '/api/thermostat/refreshed'
    });
  };

  restService.getAllSensorsDefault = function () {
    return $http({
      method: 'GET',
      url: '/api/thermostat/default'
    });
  };

  restService.getAllSensorsWithDoorOpen = function () {
    return $http({
      method: 'GET',
      url: '/api/thermostat/simulateTruckMovingDoorOpen'
    });
  };

  restService.simulateAugmentedTemperature = function () {
    return $http({
      method: 'PUT',
      url: '/api/thermostat/simulateAugmentedTemperature'
    });
  };

  restService.simulateFallingTemperature = function () {
    return $http({
      method: 'PUT',
      url: '/api/thermostat/simulateFallingTemperature'
    });
  };
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ThermostatService;
ThermostatService.$inject = ['ThermostatRestService', 'SensorToTermostatMapper'];

function ThermostatService(ThermostatRestService, SensorToTermostatMapper) {
    var service = this;

    service.getAllSensorsDefault = function () {
        return ThermostatRestService.getAllSensorsDefault().then(service.processResponseData);
    };

    service.getAllSensorsRefreshed = function () {
        return ThermostatRestService.getAllSensorsRefreshed().then(service.processResponseData);
    };

    service.simulateAugmentedTemperature = function () {
        return ThermostatRestService.simulateAugmentedTemperature();
    };

    service.simulateFallingTemperature = function () {
        return ThermostatRestService.simulateFallingTemperature();
    };
    service.processResponseData = function (response) {
        return response.data.map(function (element) {
            return SensorToTermostatMapper.mapTo(element);
        });
    };
}

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports = "<main class=\"\">\n\t<section>\n\t\t<div class=\"title text-center\">\n\t\t\t<h1>Truck Control Panel</h1>\n\t\t</div>\n\n\t\t<div class=\"alert alert-dismissible text-center\" role=\"alert\" ng-if=\"panelCtrl.error.message\" ng-class=\"{ 'temperature-hot': panelCtrl.error.isOutOfMaximun,'temperature-cold': panelCtrl.error\t.isOutOfMinimun}\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" ng-click=\"panelCtrl.closeMessageError()\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t<span class=\"message\">{{panelCtrl.error.message}}</span>\n\t\t</div>\n\n\t\t<div class=\"row col-md-offset-2\">\n\t\t\t<div ng-class=\"{ 'temperature-hot': thermostat.isOutOfMaximun,'temperature-cold': thermostat.isOutOfMinimun}\"  class=\"panel panel-default col-md-3 card-panel\" ng-repeat=\"thermostat in panelCtrl.thermostats track by thermostat.codigo\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<h1 class=\"text-center\">{{thermostat.name}}</h1>\n\t\t\t\t\t\t<h2 class=\"text-center\">{{thermostat.temperature}}°C</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"container\">\n\t\t\t<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"Justified button group\">\n\t\t\t\t<a href=\"#\" class=\"btn btn-default\" role=\"button\" ng-click=\"panelCtrl.simulateFallingTemperature()\">Simulate Falling Temperature</a> \n\t\t\t\t<a href=\"#\" class=\"btn btn-default\" role=\"button\" ng-click=\"panelCtrl.simulateIncreasingTemperature()\">Simulate Increment Temperature</a>\n\t\t\t\t<a href=\"#\" class=\"btn btn-default\" role=\"button\" ng-click=\"panelCtrl.initializeTruckPanel()\">Default Values</a>\n\t\t\t</div>\t\n\t\t</div>\n\t</section>\n</main>"

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angularUiRouter = __webpack_require__(20);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

__webpack_require__(102);

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
PanelController.$inject = ['ThermostatService'];
function PanelController(ThermostatService) {
  var vm = this;
  vm.thermostats = [];
  vm.error = { message: "", isOutOfMaximun: false, isOutOfMinimun: false };

  vm.simulateIncreasingTemperature = simulateIncreasingTemperature;
  vm.initializeTruckPanel = initializeTruckPanel;
  vm.simulateFallingTemperature = simulateFallingTemperature;
  vm.closeMessageError = closeMessageError;

  initializeTruckPanel();

  function initializeTruckPanel() {
    ThermostatService.getAllSensorsDefault().then(function (response) {
      vm.thermostats = response;
      showMesssageError(response);
    });
  }

  function refreshTruckPanelValues() {
    ThermostatService.getAllSensorsRefreshed().then(function (response) {
      vm.thermostats = response;
      showMesssageError(response);
    });
  }

  function simulateFallingTemperature() {
    ThermostatService.simulateFallingTemperature().then(function (response) {
      refreshTruckPanelValues();
    });
  }

  function simulateIncreasingTemperature() {
    ThermostatService.simulateAugmentedTemperature().then(function (response) {
      refreshTruckPanelValues();
    });
  }

  function showMesssageError(response) {
    if (response.some(function (item) {
      return item.isOutOfMaximun;
    })) {
      vm.error.message = "the value of a container is out of range parameters of temperature, temperature is bigger!";
      vm.error.isOutOfMaximun = true;
      vm.error.isOutOfMinimun = false;
    } else if (response.some(function (item) {
      return item.isOutOfMinimun;
    })) {
      vm.error.message = "the value of a container is out of range parameters of temperature, temperature is smaller!";
      vm.error.isOutOfMaximun = false;
      vm.error.isOutOfMinimun = true;
    } else {
      vm.error.message = "";
      vm.error.isOutOfMaximun = false;
      vm.error.isOutOfMinimun = false;
    }
  }
  function closeMessageError() {
    vm.message.error = "";
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

__webpack_require__(103);

var _angularUiRouter = __webpack_require__(20);

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _routes = __webpack_require__(99);

var _routes2 = _interopRequireDefault(_routes);

var _PanelController = __webpack_require__(95);

var _PanelController2 = _interopRequireDefault(_PanelController);

var _SensorToTermostatMapper = __webpack_require__(97);

var _SensorToTermostatMapper2 = _interopRequireDefault(_SensorToTermostatMapper);

var _ThermostatRestService = __webpack_require__(100);

var _ThermostatRestService2 = _interopRequireDefault(_ThermostatRestService);

var _ThermostatService = __webpack_require__(101);

var _ThermostatService2 = _interopRequireDefault(_ThermostatService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = angular.module('app.panel', [_angularUiRouter2.default]).config(_routes2.default).controller('PanelController', _PanelController2.default).service('SensorToTermostatMapper', _SensorToTermostatMapper2.default).service('ThermostatRestService', _ThermostatRestService2.default).service('ThermostatService', _ThermostatService2.default);

exports.default = Panel.name;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SensorToTermostatMapper;
var thermostatModel = __webpack_require__(98);

function SensorToTermostatMapper() {
    var mapper = this;

    mapper.mapTo = function (sensor) {
        return new thermostatModel(sensor.codigo, sensor.name, sensor.temperature, sensor.minTemperature, sensor.maxTemperature);
    };
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Thermostat = function Thermostat(codigo, name, temperature, min, max) {
   this.codigo = codigo;
   this.name = name;
   this.temperature = temperature;
   this.isOutOfMinimun = temperature < min;
   this.isOutOfMaximun = temperature > max;
};

module.exports = Thermostat;

/***/ }),

/***/ 99:
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
        template: __webpack_require__(105)
    });
}

/***/ })

},[94]);