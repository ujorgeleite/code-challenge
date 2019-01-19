"use strict";

var Thermostat = function Thermostat(codigo, name, temperature) {
	this.codigo = codigo;
	this.name = name;
	this.temperature = temperature;
};

module.exports = Thermostat;