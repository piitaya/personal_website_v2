angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise( function($injector) {
        var $state = $injector.get("$state");
        $state.go('home');
    });

    $locationProvider.html5Mode(true);

    $stateProvider

    .state ('home', {
        url: '/',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'homeController as vm'
    });
});