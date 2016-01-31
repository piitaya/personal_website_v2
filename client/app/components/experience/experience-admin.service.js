(function () {
	'use strict';
	angular
		.module('app.services')
		.factory('experienceAdminService', experienceAdminService);

	experienceAdminService.$inject = ['$resource'];

	function experienceAdminService($resource) {
		return $resource('/api/admin/experiences/:id', { id: '@_id' }, {
			update: {
				method: 'PUT' // this method issues a PUT request
			}
		});
	}
})();