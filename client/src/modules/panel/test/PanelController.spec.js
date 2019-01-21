describe('PanelController', () => {
    let panelController, scope, ThermostatService, controller;

    beforeEach(() => {
      angular.mock.module('app.panel');

      inject(($rootScope, $controller, _ThermostatService_) => {
        scope = $rootScope.$new();
        controller = $controller;
        
        ThermostatService = _ThermostatService_;

        panelController = controller('PanelController', {
          $scope: scope
        });

      });
    });

    describe('', () => {
       
        it('',function(){
            expect(true).toBe(true)
        })
          
    });
});