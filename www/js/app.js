
angular.module('demo', ['ionic', 'demo.services', 'demo.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider


	.state('signin', {
		url: '/signin',
		controller: ''
		templateUrl: 'templates/login.html'
	})

	.state('main', {
		url: '/main',
		views: {
				templateUrl: 'templates/main.html'
		}
	});


	$urlRouterProvider.otherwise('/signin');

});

