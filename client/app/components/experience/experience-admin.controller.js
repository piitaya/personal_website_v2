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
		vm.duration = duration;

		activate();

		function activate() {
			vm.experiences = experienceService.query(); // returns all the pokemons
		}

		function create() {
			vm.newExperience.startDate = getDate(vm.newExperience.startDate);
			vm.newExperience.endDate = getDate(vm.newExperience.endDate);
			experienceService.save(vm.newExperience).$promise.then(function(experience) {
				vm.experiences.push(experience);
				vm.newExperience = {};
				$("#new-experience-form").removeClass("active");
				console.log("Experience created");
			});
		}

		function update(experience) {
			experience.startDate = getDate(experience.startDate);
			experience.endDate = getDate(experience.endDate);
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

		function duration(startDate, endDate, isCurrent) {

			var start = getDate(startDate);
			var end = isCurrent ? new Date() : getDate(endDate);
			
			return "(" + getDuration(start, end) + ")";
		}

		function getDuration(start, end) {
			if (start && end) {
				start = moment(start);
				end = moment(end);
				var months = end.diff(start, 'months') + 1;
				return moment.duration(months, 'months').humanize();
			}
			else {
				return "";
			}
		}

		function getDate(date) {
			if (!date || date === "") {
				return undefined;
			}
			else if (date.indexOf("/") > -1) {
				return moment(date, 'DD/MM/YYYY').toDate();
			}
			else {
				return moment(date).toDate();
			}
			
		}
	}
})();