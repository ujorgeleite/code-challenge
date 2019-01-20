ThermostatRestService.$inject = ['$http'];

export default function ThermostatRestService($http){
    const restService = this;

    restService.getAllSensorsRefreshed = () => {
      return $http({
        method: 'GET',
        url: '/api/thermostat/refreshed'
      });
    };
  
    restService.getAllSensorsDefault = () => {
      return $http({
        method: 'GET',
        url: '/api/thermostat/default'
      });
    };
  
    restService.getAllSensorsWithDoorOpen= () => {
      return $http({
        method: 'GET',
        url: '/api/thermostat/simulateTruckMovingDoorOpen'
      });
    };
  
  
    restService.simulateAugmentedTemperature= () => {
      return $http({
        method: 'PUT',
        url: '/api/thermostat/simulateAugmentedTemperature'
      });
    };

}