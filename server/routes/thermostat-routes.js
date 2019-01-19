'use strict';
const _ThermostatService = require('../services/thermostat-service');
module.exports = function (app) {
    app.get('/', function (req, res) { 
        res.send(_ThermostatService.getAllThermostatState());
    });

    app.get('/normal', function (req, res) { 
        res.send(_ThermostatService.getAllThermostatNormalState());
    });

    app.get('/getThermostatStateById', function (req, res) {
        res.send(_ThermostatService.getThermostatStateById(req.query.id));
    });

    app.get('/simulateTruckMovingDoorOpen', function (req, res) { 
        res.send(_ThermostatService.simulateTruckMovingDoorOpen());
    });

    app.get('/simulateTruckStoppedDoorOpen', function (req, res) { 
        res.send(_ThermostatService.simulateTruckStoppedDoorOpen());
    });

    app.put('/simulateAugmentedTemperature', function (req, res) { 
        _ThermostatService.simulateAugmentedTemperature()
        res.send();
    });
    
};