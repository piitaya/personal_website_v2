(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['homeService', 'experienceService', 'dateService'];

	function HomeController(homeService, experienceService, dateService) {
		var vm = this;

		vm.collapsibleElements = homeService.getElements();
		vm.experiences = [];
		vm.duration = duration;
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

		activate();

		function duration(startDate, endDate, isCurrent) {
			var start = dateService.getDate(startDate);
			var end = isCurrent ? new Date() : dateService.getDate(endDate);
			
			if (start && end) {
				return "(" + dateService.getDuration(start, end) + ")";
			}
			else {
				return "";
			}
		}

		function activate() {
			experienceService.all().$promise.then(function(experiences) {
				vm.experiences = experiences;
			});
		}
	}
})();