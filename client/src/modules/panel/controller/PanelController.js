
PanelController.$inject = ['ThermostateService'];
export default function PanelController(ThermostateService) {
  const vm = this;
  vm.thermostates = [];

  ThermostateService.getAllSensorsDefault().then(function(response){
    vm.thermostates = response.data; 
  })


}