PanelController.$inject = ['ThermostatService'];
export default function PanelController(ThermostatService) {
  const vm = this;
  vm.thermostats = [];
  vm.error ={ message: "",isOutOfMaximun: false,isOutOfMinimun:false};

  vm.simulateIncreasingTemperature = simulateIncreasingTemperature;
  vm.initializeTruckPanel = initializeTruckPanel;
  vm.simulateFallingTemperature = simulateFallingTemperature;
  vm.closeMessageError = closeMessageError

  

   function initializeTruckPanel(){
      ThermostatService.getAllSensorsDefault()
              .then(function(response){
                vm.thermostats = response;
                showMesssageError(response);
      });
   }

  function refreshTruckPanelValues(){
    ThermostatService.getAllSensorsRefreshed()
            .then(function(response){
              vm.thermostats = response;
              showMesssageError(response);
      });

  }
  

  function simulateFallingTemperature(){
      ThermostatService.simulateFallingTemperature()
              .then(function(response){
                refreshTruckPanelValues();
        });

  }

   function simulateIncreasingTemperature(){
      ThermostatService.simulateAugmentedTemperature()
              .then(function(response){
                refreshTruckPanelValues();
      });

    }

    function showMesssageError(response) {
      if(response.some(item => item.isOutOfMaximun)){ 
        vm.error.message = "the value of a container is out of range parameters of temperature, temperature is bigger!";
        vm.error.isOutOfMaximun = true;
        vm.error.isOutOfMinimun = false;
      }
      else if(response.some(item => item.isOutOfMinimun)){
         vm.error.message = "the value of a container is out of range parameters of temperature, temperature is smaller!";
         vm.error.isOutOfMaximun = false;
         vm.error.isOutOfMinimun = true
      }
      else{
        vm.error.message = "";
        vm.error.isOutOfMaximun = false;
        vm.error.isOutOfMinimun = false
      }
    }
    function closeMessageError(){
      vm.message.error = "";
      
    }

}