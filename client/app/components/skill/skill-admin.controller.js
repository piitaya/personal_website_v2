(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('SkillAdminController', SkillAdminController);

	SkillAdminController.$inject = ['skillService'];

	function SkillAdminController(skillService) {
		var vm = this;
		
		vm.skills = [];
		vm.newSkill = {};
		vm.create = create;
		vm.update = update;
		vm.remove = remove;

		activate();

		function activate() {
			vm.skills = skillService.query(); // returns all the pokemons
		}

		function create() {
			skillService.save(vm.newSkill).$promise.then(function(skill) {
				vm.skills.push(skill);
				vm.newSkill = {};
				$("#new-skill-form").removeClass("active");
				console.log("Skill created");
			});
		}

		function update(skill) {
			skillService.get({id: skill._id }).$promise.then(function() {
				return skillService.update({id: skill._id}, skill).$promise;
			}).then(function() {
				console.log("Skill updated");
			});
		}

		function remove(skill) {
			skillService.remove({id: skill._id}).$promise.then(function(skill) {
				var skillIndex = vm.skills.indexOf(skill);
				vm.skills.splice(skillIndex, 1);
				console.log("Skill removed");
			});
			
		}
	}
})();