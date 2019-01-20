import '/client/src/less/panel.less';

import UIRouter from 'angular-ui-router';
import Routes from '/client/src/modules/panel/routes';
import PanelController from '/client/src/modules/panel/controller/PanelController';
import ThermostateService from '/client/src/modules/panel/services/ThermostateService';


const Panel = angular.module('app.panel', [UIRouter]).
				config(Routes).
				controller('PanelController', PanelController)
				.service('ThermostateService', ThermostateService);
			

export default Panel.name;