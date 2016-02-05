(function () {
	'use strict';
	angular
		.module('app.controllers')
		.controller('HeaderController', HeaderController);

	HeaderController.$inject = [];

	function HeaderController() {
		var vm = this;
		vm.closeSideNav = closeSideNav;

		activate();

		function activate() {
			$(".button-collapse").sideNav();
		}
		
		function closeSideNav() {
			console.log("click");
			$('.button-collapse').sideNav('hide');
		}
	}
})();