var routes = angular.module('routes',[]);

routes.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('dashboard',{
			url:'/dashboard',
			templateUrl:'views/dashboard/main.html',
			controller: 'dashboard.main',
			cache:false
		})
		.state('details',{
			url:'/details',
			templateUrl:'views/dashboard/details.html',
			controller: 'dashboard.details',
			cache:true
		})

	$urlRouterProvider.otherwise('/dashboard');
});