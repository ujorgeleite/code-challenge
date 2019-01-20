"use strict";

var Thermostat = function Thermostat(codigo,name,temperature,min,max) {
	this.codigo = codigo;
	this.name = name;
    this.temperature = temperature;
    this.isOutOfMinimun = temperature < min;
    this.isOutOfMaximun = temperature > max;
    
};

module.exports = Thermostat;