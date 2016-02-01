(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('ExperienceAdminController', ExperienceAdminController);

	ExperienceAdminController.$inject = ['experienceAdminService'];

	function ExperienceAdminController(experienceAdminService) {
		var vm = this;
		
		experienceAdminService.query(function(experiences) {
			vm.experiences = experiences;
		});

		vm.update = function(experience) {
			experience.$update(function() {
			});
		};

		vm.delete = function(experience) {
			experience.$remove(function() {
			});
		};
	}
})();