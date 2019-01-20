ThermostatService.$inject = ['ThermostatRestService','SensorToTermostatMapper'];

export default function ThermostatService(ThermostatRestService,SensorToTermostatMapper){
    const service = this;

    service.getAllSensorsDefault = () => {
        return ThermostatRestService.getAllSensorsRefreshed()
                .then(function(response){
                    let result = [];
                    response.data.forEach(element => {
                        result.push(SensorToTermostatMapper.mapTo(element));
                    }); 

                    return result;
                });
    }
    
}