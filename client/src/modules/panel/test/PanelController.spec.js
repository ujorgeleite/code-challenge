
describe('PanelController', () => {
    let panelController, scope, ThermostatService,SensorToTermostatMapper,ThermostatRestService, controller;

    beforeEach(() => {
      angular.mock.module('app.panel');

      inject(($rootScope, $controller, _SensorToTermostatMapper_ ,_ThermostatRestService_,_ThermostatService_) => {
        scope = $rootScope.$new();
        controller = $controller;
        
        SensorToTermostatMapper = _SensorToTermostatMapper_;
        ThermostatRestService = _ThermostatRestService_;
        ThermostatService = _ThermostatService_;

        panelController = controller('PanelController', {
          $scope: scope
        });

      });    
    });

    describe('Given that opened truck panel, ', () => {
        beforeEach(() => {

          spyOn(ThermostatService, 'getAllSensorsDefault').and.callFake(() => {
            return {
              then: (callback) => {
                return callback(listBeerDefaultPopuled());
              }
            };
          });
          
          panelController.initializeTruckPanel();
        })
      
        it('then, the thermostates list should be populed =>',() =>{
          expect(panelController.thermostats.length).toBe(6);
        })

        it('then, all thermostates listed, should be in a correct range of temperature =>',() => {
          expect(panelController.thermostats.every(item => !item.isOutOfMaximum && !item.isOutOfMinimun)).toBe(true);
        })

        it('then, error message is not showed in the panel=>',() => {
          expect(panelController.error.message).toBe("");
        })

        it('then, error flag for notify that tempearature is out of maximum range is false=>',() => {
          expect(panelController.error.isOutOfMaximun).toBe(false);
        })

        it('then, error flag for notify that tempearature is out of minimum range is false =>',() => {
          expect(panelController.error.isOutOfMinimun).toBe(false);
        })

        describe(' and when click in simulate INCREASING TEMPERATURE', () => {

          beforeEach(() => {
            spyOn(ThermostatService,'simulateAugmentedTemperature').and.callFake(() => {
              return {
                then: (callback) => {
                  return callback();
                }
              };
            });

            spyOn(ThermostatService, 'getAllSensorsRefreshed').and.callFake(() => {
              return {
                then: (callback) => {
                  return callback(listBeerTemperatureIncrementedPopuled());
                }
              };
            });

            panelController.simulateIncreasingTemperature();

          })

          it('then, the list from thermostat should be changed => ',() =>{
            expect(panelController.thermostats).not.toBe(listBeerDefaultPopuled());
          });

          it('then, the first element from has a differente temperature => ',() =>{
            expect(panelController.thermostats[0].temperature).toBeGreaterThan(listBeerDefaultPopuled()[0].temperature);
          });

          it('then, thermostate service method Simulate Augmented Temperature should be caller one time  => ',() =>{
            expect(ThermostatService.simulateAugmentedTemperature).toHaveBeenCalledTimes(1);
          });

        })

        describe(' and when click in simulate FALLING TEMPERATURE', () => {
          beforeEach(() => {
            spyOn(ThermostatService,'simulateFallingTemperature').and.callFake(() => {
              return {
                then: (callback) => {
                  return callback();
                }
              };
            });
            spyOn(ThermostatService, 'getAllSensorsRefreshed').and.callFake(() => {
              return {
                then: (callback) => {
                  return callback(listBeerTemperatureDecrementedPopuled());
                }
              };
            });
            panelController.simulateFallingTemperature();
          })
         
          it('then, the list from thermostat should be changed to default state => ',() =>{
            expect(panelController.thermostats).not.toBe(listBeerDefaultPopuled());
          });

          it('then, the first element from has a differente temperature => ',() =>{
            expect(panelController.thermostats[0].temperature).toBeLessThan(listBeerDefaultPopuled()[0].temperature);
          });

          it('then, thermostate service method Simulate Falling Temperature should be caller one time  => ',() =>{
            expect(ThermostatService.simulateFallingTemperature).toHaveBeenCalledTimes(1);
          });

        });
    });
});


function listBeerDefaultPopuled(){
  return[
          {codigo: '1', name: 'Pilsner', temperature: 4, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '2', name: 'IPA', temperature: 5, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '3', name: 'Lager', temperature: 4, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '4', name: 'Stout', temperature: 6, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '5', name: 'Wheat beer', temperature: 3, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '6', name: 'Pale Ale', temperature: 4, isOutOfMinimun: false, isOutOfMaximum: false}
        ]
}

function listBeerTemperatureIncrementedPopuled(){
  return[
          {codigo: '1', name: 'Pilsner', temperature: 5, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '2', name: 'IPA', temperature: 6, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '3', name: 'Lager', temperature: 5, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '4', name: 'Stout', temperature: 7, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '5', name: 'Wheat beer', temperature: 4, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '6', name: 'Pale Ale', temperature: 5, isOutOfMinimun: false, isOutOfMaximum: false}
        ]
}

function listBeerTemperatureDecrementedPopuled(){
  return[
          {codigo: '1', name: 'Pilsner', temperature: 3, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '2', name: 'IPA', temperature: 4, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '3', name: 'Lager', temperature: 3, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '4', name: 'Stout', temperature: 5, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '5', name: 'Wheat beer', temperature: 3, isOutOfMinimun: false, isOutOfMaximum: false},
          {codigo: '6', name: 'Pale Ale', temperature: 3, isOutOfMinimun: false, isOutOfMaximum: false}
        ]
}