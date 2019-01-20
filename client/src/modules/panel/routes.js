route.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

export default function route($stateProvider, $urlMatcherFactoryProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('panel', {
        cache: false,
        url: '/',
        controller:'PanelController',
        controllerAs:'panelCtrl',
        template: require('./views/panel.html')
    });
    
}