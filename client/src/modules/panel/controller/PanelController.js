PanelController.$inject = ['ThermostatService'];
export default function PanelController(ThermostatService) {
  const vm = this;
  vm.thermostats = [];
  
  ThermostatService.getAllSensorsDefault().then(function(response){
    vm.thermostats = response.data; 
  })


}