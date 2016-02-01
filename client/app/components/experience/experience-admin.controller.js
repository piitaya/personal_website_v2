(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('ExperienceAdminController', ExperienceAdminController);

	ExperienceAdminController.$inject = ['experienceService'];

	function ExperienceAdminController(experienceService) {
		var vm = this;
		
		vm.experiences = experienceService.query(); // returns all the pokemons

	    vm.create = function(){
	        experienceService.save(vm.newExperience);
	        vm.newExperience = {}; // clear new pokemon object
	    };

	    vm.update = function(experience) {
	        experienceService.get({id: experience._id }, function() {
	            experienceService.update({id: experience._id}, experience);
	        });
	    };

	    vm.delete = function(experience) {
	        experienceService.remove({id: experience._id});
	        var experienceIndex = vm.experiences.indexOf(experience);
	        vm.experiences.splice(experienceIndex, 1);
	    };
	}
})();