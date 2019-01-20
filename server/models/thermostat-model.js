"use strict";

var Thermostat = function Thermostat(codigo, name, temperature, min, max) {
	this.codigo = codigo;
	this.name = name;
	this.temperature = temperature;
	this.minTemperature = min;
	this.maxTemperature = max;
};

module.exports = Thermostat;