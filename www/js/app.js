
var app = angular.module('demo', ['ionic', 'demo.services', 'demo.controllers'])

app.run(function(){
	Parse.initialize("nKrL0vJaS2mLjgbs6KJHQRuWtVXXgDRBPFVactl3","Y5iiaMlmDCDnK5Q1Hq8BO0EzTII8O5sCBwAghvy1");
});


app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider


	.state('signin', {
		url: '/signin',
		controller: 'SignCtrl',
		templateUrl: 'templates/login.html'
	})

	.state('note', {
		url: '/note',
		controller: 'NoteCtrl',
		templateUrl: 'templates/main.html'
	});


	$urlRouterProvider.otherwise('/signin');

});

