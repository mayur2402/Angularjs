var app = angular.module('myapp',[]);

app.controller('mycontroller',function($scope){
	$scope.firstname = ' ';
	$scope.lastname = ' ';
	$scope.fullname = function(){
		return $scope.firstname+" "+$scope.lastname;
	};
});
