let thermostatModel = require('../models/ThermostatSensorModel');

export default function SensorToTermostatMapper(){
    const mapper = this;

    mapper.mapTo = (sensor) => {
        return new thermostatModel(sensor.codigo,sensor.name,sensor.temperature,sensor.minTemperature,sensor.maxTemperature);
    }
    
}