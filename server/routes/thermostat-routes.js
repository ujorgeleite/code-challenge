'use strict';
const _ThermostatService = require('../services/thermostat-service');
module.exports = function (app) {
    app.get('/api/thermostate/refreshed', function (req, res) { 
        res.send(_ThermostatService.getAllThermostatState());
    });

    app.get('/api/thermostate/default', function (req, res) { 
        res.send(_ThermostatService.getAllThermostatNormalState());
    });

    app.get('/api/thermostate/getThermostatStateById', function (req, res) {
        res.send(_ThermostatService.getThermostatStateById(req.query.id));
    });

    app.get('/api/thermostate/simulateTruckMovingDoorOpen', function (req, res) { 
        res.send(_ThermostatService.simulateTruckMovingDoorOpen());
    });

    app.get('/api/thermostate/simulateTruckStoppedDoorOpen', function (req, res) { 
        res.send(_ThermostatService.simulateTruckStoppedDoorOpen());
    });

    app.put('/api/thermostate/simulateAugmentedTemperature', function (req, res) { 
        _ThermostatService.simulateAugmentedTemperature()
        res.send();
    });
    
};