'use strict';
const _ThermostatService = require('../services/thermostat-service');
module.exports = function (app) {
    app.get('/api/thermostat/refreshed', function (req, res) { 
        res.send(_ThermostatService.getAllThermostatState());
    });

    app.get('/api/thermostat/default', function (req, res) { 
        res.send(_ThermostatService.getAllThermostatNormalState());
    });

    app.get('/api/thermostat/getThermostatStateById', function (req, res) {
        res.send(_ThermostatService.getThermostatStateById(req.query.id));
    });

    app.get('/api/thermostat/simulateTruckMovingDoorOpen', function (req, res) { 
        res.send(_ThermostatService.simulateTruckMovingDoorOpen());
    });

    app.get('/api/thermostat/simulateTruckStoppedDoorOpen', function (req, res) { 
        res.send(_ThermostatService.simulateTruckStoppedDoorOpen());
    });

    app.put('/api/thermostat/simulateAugmentedTemperature', function (req, res) { 
        _ThermostatService.simulateAugmentedTemperature()
        res.send();
    });
    
};