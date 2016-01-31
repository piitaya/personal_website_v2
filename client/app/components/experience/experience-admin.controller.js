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
	}
})();