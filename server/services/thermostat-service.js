'use-strict'
const _ThermostatRestService = require(`${global.__base}server/rest_services/thermostat-rest-service`);

module.exports = {
    getAllThermostatState: getAllThermostatState,
    getThermostatStateById: getThermostatStateById,
    simulateTruckMovingDoorOpen: simulateTruckMovingDoorOpen,
    simulateTruckStoppedDoorOpen: simulateTruckStoppedDoorOpen,
    simulateAugmentedTemperature: simulateAugmentedTemperature,
    getAllThermostatNormalState: getAllThermostatNormalState,
    getAllThermostatState: getAllThermostatState

};


function getAllThermostatState(){
    console.log(_ThermostatRestService.getAll());
    return _ThermostatRestService.getAll();
}


function getAllThermostatNormalState()
{
    console.log(_ThermostatRestService.getAllNormalTemperature());
    return _ThermostatRestService.getAllNormalTemperature();
}

function getThermostatStateById(id)
{
    return `getThermostatStateById ---> ${id}`
}

function simulateTruckMovingDoorOpen()
{
    console.log(_ThermostatRestService.getSortedWarningTemperature());
    return _ThermostatRestService.getSortedWarningTemperature();
}

function simulateTruckStoppedDoorOpen()
{
    return `simulateTruckStoppedDoorOpen`;
}

function simulateAugmentedTemperature()
{
     _ThermostatRestService.setAllWithAugmentedTemperature();
}