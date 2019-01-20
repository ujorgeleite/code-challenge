ThermostatService.$inject = ['ThermostatRestService'];

export default function ThermostatService(ThermostatRestService){
    const service = this;

    service.getAllSensorsDefault = () => {
        return ThermostatRestService.getAllSensorsDefault();
    }
    
}