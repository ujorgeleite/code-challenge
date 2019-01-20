import '/client/src/less/panel.less';

import UIRouter from 'angular-ui-router';
import Routes from '/client/src/modules/panel/routes';
import PanelController from '/client/src/modules/panel/controller/PanelController';
import SensorToTermostatMapper from '/client/src/modules/panel/mappers/SensorToTermostatMapper'
import ThermostatRestService from '/client/src/modules/panel/services/ThermostatRestService';
import ThermostatService from '/client/src/modules/panel/services/ThermostatService';


const Panel = angular.module('app.panel', [UIRouter]).
				config(Routes).
				controller('PanelController', PanelController)
				.service('SensorToTermostatMapper',SensorToTermostatMapper)
				.service('ThermostatRestService', ThermostatRestService)
				.service('ThermostatService', ThermostatService);
			

export default Panel.name;