(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['homeService'];

	function HomeController(homeService) {
		var vm = this;

		vm.collapsibleElements = homeService.getElements();
	}
})();