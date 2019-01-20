import '../../less/truck_control_panel.less';

import UIRouter from 'angular-ui-router';
import Routes from '../truck-control-panel/routes';
import TruckControlPanelController from '../truck-control-panel/controller/TruckControlPanelController';

const TruckControlPanel = angular.module('app.truck-control-panel', [UIRouter]).
				config(Routes).
				controller('TruckControlPanelController', TruckControlPanelController);

export default TruckControlPanel.name;