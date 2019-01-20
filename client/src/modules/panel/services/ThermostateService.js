ThermostateService.$inject = ['$http'];

export default function ThermostateService($http){
  const service = this;

  service.getAllSensorsRefreshed = () => {
    return $http({
      method: 'GET',
      url: '/api/thermostate/refreshed'
    });
  };

  service.getAllSensorsDefault = () => {
    return $http({
      method: 'GET',
      url: '/api/thermostate/default'
    });
  };

  service.getAllSensorsWithDoorOpen= () => {
    return $http({
      method: 'GET',
      url: '/api/thermostate/simulateTruckMovingDoorOpen'
    });
  };


  service.simulateAugmentedTemperature= () => {
    return $http({
      method: 'PUT',
      url: '/api/thermostate/simulateAugmentedTemperature'
    });
  };
}