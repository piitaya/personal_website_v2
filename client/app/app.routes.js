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
                        controller: 'CommonController',
                        controllerAs: 'common'
                    },
                    'header@main': {
                        templateUrl: 'app/shared/header/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    },
                    'footer@main': {
                        templateUrl: 'app/shared/footer/footer.html',
                        controller: 'FooterController',
                        controllerAs: 'footer'
                    }
                }
            })

            .state ('main.home', {
                url: '/',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })

            .state ('admin', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'app/shared/admin/admin.html',
                        controller: 'AdminController',
                        controllerAs: 'admin'
                    },
                    'header@admin': {
                        templateUrl: 'app/shared/header/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    }
                }
            })

            .state('admin.experiences', { // state for showing all experiences
                url: '/admin/experiences',
                templateUrl: 'app/components/experience/experience-admin.html',
                controller: 'ExperienceAdminController',
                controllerAs: 'vm'
            })

            .state('admin.skills', { // state for showing all skills
                url: '/admin/skills',
                templateUrl: 'app/components/skill/skill-admin.html',
                controller: 'SkillAdminController',
                controllerAs: 'vm'
            })

             .state('admin.skill-types', { // state for showing all skill types
                url: '/admin/skill-types',
                templateUrl: 'app/components/skill-type/skill-type-admin.html',
                controller: 'SkillTypeAdminController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise( function($injector) {
            var $state = $injector.get("$state");
            $state.go('main.home');
		});
	}
})();