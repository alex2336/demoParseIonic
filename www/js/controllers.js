angular.module('demo.controllers', [])


.controller('SignCtrl', ['$scope','$ionicLoading', '$state', function($scope, $ionicLoading, $state) {
	$scope.user={
		email:'',
		password:''
	};
	$scope.login=function onSignIn(){
		var email = $scope.user.email;
		var password = $scope.user.password;
		$ionicLoading.show({
			template: 'Connecting...'
		});
		Parse.User.logIn(email,password).then(function(user){
			$state.go('note');
			$ionicLoading.hide();
		},function(error){
			$ionicLoading.hide();
			console.log(error);
			alert("wrong username/password");
		})
		// Parse.User.signUp("sajith","abc123").then(function(){
		// 	$ionicLoading.hide();
		// });
	}
}])



.controller('NoteCtrl', function() {
	
});
