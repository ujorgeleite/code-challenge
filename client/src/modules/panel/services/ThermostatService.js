ThermostatService.$inject = ['ThermostatRestService','SensorToTermostatMapper'];

export default function ThermostatService(ThermostatRestService,SensorToTermostatMapper){
    const service = this;

    service.getAllSensorsDefault = () => {
        return ThermostatRestService.getAllSensorsDefault()
                .then((service.processResponseData))
    }


    service.getAllSensorsRefreshed = () => {
        return ThermostatRestService.getAllSensorsRefreshed()
                .then(service.processResponseData)
    }

     service.simulateAugmentedTemperature = () => {
        return ThermostatRestService.simulateAugmentedTemperature();
    }

    service.simulateFallingTemperature = () => {
        return ThermostatRestService.simulateFallingTemperature();
        
    }
    service.processResponseData = (response) => {
        return response.data.map(element => {
            return SensorToTermostatMapper.mapTo(element);
        });     
    } 
}