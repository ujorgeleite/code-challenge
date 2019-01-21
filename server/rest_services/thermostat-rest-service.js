'use-strict'
const dataMock = require(`${global.__base}server/helpers/data-mock/thermostat-state-mock`);

module.exports = {
    getAllNormalTemperature: getAllNormalTemperatureMocked,
    getSortedWarningTemperature: getSortedWarningTemperatureMocked,
    setAllWithAugmentedTemperature: setAllWithAugmentedTemperatureMocked,
    getAll: getAllMocked,
    setAllWithFallingTemperature: setAllWithFallingTemperature

}

function getAllNormalTemperatureMocked() {
    return dataMock.getAllNormalTemperature();
}

function getSortedWarningTemperatureMocked() {
    return dataMock.getSortedWarningTemperature();
}

function setAllWithAugmentedTemperatureMocked() {
    return dataMock.setAllHotTemperature();
}

function getAllMocked() {
    return dataMock.getAll();
}
function setAllWithFallingTemperature() {
    return dataMock.setAllColdTemperature();
}
