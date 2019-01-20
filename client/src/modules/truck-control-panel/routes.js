route.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

export default function route($stateProvider, $urlMatcherFactoryProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('truck', {
        cache: false,
        url: '/',
        controller:'TruckControlPanelController',
        controllerAs:'truckCtrl',
        template: require('../truck-control-panel/views/truck_control_panel.html')
    });
}