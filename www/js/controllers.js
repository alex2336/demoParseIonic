angular.module('demo.controllers', [])


.controller('SignCtrl', function($scope, PetService) {
  $scope.user={
		email:'',
		password:''
	};
	$scope.login=function onSignIn(){
		var email = $scope.user.email;
		var password = $scope.user.password;
		Parse.User.logIn(email,password).then(function(user){
			$location.path("/main");
		},function(error){
			alert("wrong username/password");
		})
	}
})



.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  $scope.pet = PetService.get($stateParams.petId);
});
