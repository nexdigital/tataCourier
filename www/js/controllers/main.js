var mainController = angular.module('mainController',['ngCordova']);

mainController.controller('main.controller',function($rootScope,$cordovaBarcodeScanner){
	$rootScope.addItem = function(){
		document.addEventListener("deviceready", function () {
			$cordovaBarcodeScanner
			.scan()
			.then(function(barcodeData) {
				alert(barcodeData);
			}, function(error) {
				alert(error);
			});
		});	
	}
});

mainController.controller('dashboard.main',function($scope){
	$scope.pageTitle = "Tata Courier";
});

mainController.controller('dashboard.details',function($scope){
	$scope.pageTitle = "THS00001";
});