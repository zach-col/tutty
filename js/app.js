var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	//set up routes
	$routeProvider
		.when('/', {
			templateUrl: 'views/index.html',
			controller: 'MainController'
		})
		.when('/raspas', {
			templateUrl: 'views/raspas.html',
			controller: 'RaspasController'
		})
		.when('/normalRaspas', {
			templateUrl: 'views/normalRaspas.html',
			controller: 'NormalRaspasController'
		})
		.when('/fruitCream', {
			templateUrl: 'views/fruitCream.html',
			controller: 'FruitCreamController'
		})
		.when('/shreddedFruit', {
			templateUrl: 'views/shreddedFruit.html',
			controller: 'ShreddedFruitController'
		})
		.when('/snacks', {
			templateUrl: 'views/snacks.html',
			controller: 'SnacksController'
		})
		.when('/gusgueria', {
			templateUrl: 'views/gusgueria.html',
			controller: 'GusgueriaController'
		});

    /*
     * Setup Pretty Routing with / vs #
     */
    $locationProvider.html5Mode(true);
});
