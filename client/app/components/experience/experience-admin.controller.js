(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('ExperienceAdminController', ExperienceAdminController);

	ExperienceAdminController.$inject = ['experienceService'];

	function ExperienceAdminController(experienceService) {
		var vm = this;
		
		vm.experiences = [];
		vm.newExperience = {};
		vm.create = create;
		vm.update = update;
		vm.remove = remove;

		activate();

		function activate() {
			vm.experiences = experienceService.query(); // returns all the pokemons
		}

		function create() {
			experienceService.save(vm.newExperience).$promise.then(function(experience) {
				vm.experiences.push(experience);
				vm.newExperience = {};
				$("#new-experience-form").removeClass("active");
				console.log("Experience created");
			});
		}

		function update(experience) {
			experienceService.get({id: experience._id }).$promise.then(function() {
				return experienceService.update({id: experience._id}, experience).$promise;
			}).then(function() {
				console.log("Experience updated");
			});
		}

		function remove(experience) {
			experienceService.remove({id: experience._id}).$promise.then(function() {
				var experienceIndex = vm.experiences.indexOf(experience);
				vm.experiences.splice(experienceIndex, 1);
				console.log("Experience removed");
			});
			
		}
	}
})();