import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

PanelController.$inject = ['ThermostatService'];
export default function PanelController(ThermostatService) {
  const vm = this;
  vm.thermostats = [];
  
  
  ThermostatService.getAllSensorsDefault()
    .then(function(response){
       vm.thermostats = response;
  });
     


}