const dataMockDir = `${global.__base}server/models/thermostat-model`;
let thermostatModel = require(dataMockDir);
let allThermostat = newValues();

module.exports = {
    getAllNormalTemperature: getAllNormalTemperature,
    getSortedWarningTemperature: getSortedWarningTemperature,
    setAllHotTemperature: setAllHotTemperature,
    getAll: getAll

}

function getAllNormalTemperature() {
    allThermostat = newValues();
    return allThermostat;
}


function getAll() {
    return allThermostat;
}

function setAllHotTemperature() {
    allThermostat.forEach(thermostat => {
        thermostat.temperature +=2;
   });
    return allThermostat;
}


function getSortedWarningTemperature() {
    allThermostat = newValues();
    allThermostat[2].temperature = 8;
    allThermostat[4].temperature = 8;

    return allThermostat;
}


function newValues(){
    return [   new thermostatModel(1, 'Pilsner', 4 ,4,6),
    new thermostatModel(2, 'IPA', 5,5,6),
    new thermostatModel(3, 'Lager',4,4,7),
    new thermostatModel(4, 'Stout', 6,6,8),
    new thermostatModel(5, 'Wheat beer', 3,3,5),
    new thermostatModel(6, 'Pale Ale', 4,4,6)];
}
