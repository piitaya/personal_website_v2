(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['homeService'];

	function HomeController(homeService) {
		var vm = this;

		vm.collapsibleElements = homeService.getElements();

		vm.events = [{
			title: 'First heading',
			content: 'Some awesome content.'
		}, {
			title: 'Second heading',
			content: 'More awesome content.'
		}, {
			title: 'Second heading',
			content: 'More awesome content.'
		}, {
			title: 'Second heading',
			content: 'More awesome content.'
		}, {
			title: 'Second heading',
			content: 'More awesome content.'
		}];
	}
})();