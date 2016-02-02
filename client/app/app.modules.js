(function () {
	'use strict';
	angular
		.module('app', [
			'ngAnimate',
			'ngResource',
			'ui.router',
			'ui.materialize',
			'nouislider',
			'app.controllers',
			'app.filters',
			'app.services',
			'app.directives'
		]);

	/* Controllers */
	angular
		.module('app.controllers', []);

	/* Filters */
	angular
		.module('app.filters', []);

	/* Services */
	angular
		.module('app.services', []);

	/* Directives */
	angular
		.module('app.directives', []);

	/* Redeclare ui.materialize module to exclude slider module (conflict with nouislider) */
	angular.module("ui.materialize", ["ui.materialize.ngModel", "ui.materialize.collapsible", "ui.materialize.toast", "ui.materialize.sidenav", "ui.materialize.material_select", "ui.materialize.dropdown", "ui.materialize.inputfield", "ui.materialize.input_date", "ui.materialize.tabs", "ui.materialize.pagination", "ui.materialize.pushpin", "ui.materialize.scrollspy", "ui.materialize.parallax","ui.materialize.modal", "ui.materialize.tooltipped", "ui.materialize.materialboxed"]);

})();
