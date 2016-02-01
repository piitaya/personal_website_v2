(function () {
	'use strict';
	angular
		.module('app.services')
		.factory('experienceService', experienceService);

	experienceService.$inject = ['$resource'];

	function experienceService($resource) {
		return $resource('/api/admin/experiences/:id', { id: '@_id' }, {
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		});
	}
})();