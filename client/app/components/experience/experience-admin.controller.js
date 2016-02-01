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
	        experienceService.save(vm.newExperience);
	        vm.experiences.push(vm.newExperience);
	        vm.newExperience = {}; // clear new pokemon object
	    }

	    function update(experience) {
	        experienceService.get({id: experience._id }, function() {
	            experienceService.update({id: experience._id}, experience);
	        });
	    }

	    function remove(experience) {
	        experienceService.remove({id: experience._id});
	        var experienceIndex = vm.experiences.indexOf(experience);
	        vm.experiences.splice(experienceIndex, 1);
	    }
	}
})();