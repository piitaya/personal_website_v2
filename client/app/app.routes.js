(function () {
	'use strict';
	angular
		.module('app')
		.config(config);

	function config($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider

            .state ('main', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'app/shared/common/common.html',
                        controller: 'CommonController as common',
                    },
                    'header@main': {
                        templateUrl: 'app/shared/header/header.html',
                        controller: 'HeaderController as header',
                    },
                    'footer@main': {
                        templateUrl: 'app/shared/footer/footer.html',
                        controller: 'FooterController as footer',
                    }
                }
            })

            .state ('main.home', {
                url: '/',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise( function($injector) {
            var $state = $injector.get("$state");
            $state.go('main.home');
		});
	}
})();