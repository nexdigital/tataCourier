var mainController = angular.module('mainController',[]);

mainController.controller('dashboard.main',function($scope){
	$scope.pageTitle = "Tata Courier";
});

mainController.controller('dashboard.details',function($scope){
	$scope.pageTitle = "THS00001";
});