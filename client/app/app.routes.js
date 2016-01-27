(function () {
	'use strict';
	angular
		.module('app')
		.config(config);

	function config($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state ('home', {
				url: '/',
				templateUrl: 'app/components/home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			});

		$urlRouterProvider.otherwise( function($injector) {
			var $state = $injector.get("$state");
			$state.go('home');
		});
	}
})();