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
		})

    .when('/tortas', {
      templateUrl: 'views/tortas.html',
      controller: 'TortasController'
    })

    .when('/ensaladas', {
      templateUrl: 'views/ensaladas.html',
      controller: 'EnsaladasController'
    })

    .when('/licuados',{
      templateUrl: 'views/licuados.html',
      controller: 'LicuadosController'
    })

    .when('/milkShakes',{
      templateUrl: 'views/milkShakes.html',
      controller: 'MilkShakesController'
    })

    .when('/smoothies',{
      templateUrl: 'views/smoothies.html',
      controller: 'SmoothiesController'
    })

    .when('/aguasFrescas',{
      templateUrl: 'views/aguasFrescas.html',
      controller: 'AguasFrescasController'
    })

    .when('/kidsMenu',{
      templateUrl: 'views/kidsMenu.html',
      controller: 'KidsMenuController'
    })

    .when('/jugos',{
      templateUrl: 'views/jugos.html',
      controller: 'JugosController'
    })

    .when('/quesadillas',{
      templateUrl: 'views/quesadillas',
      controller: 'QuesadillasController.html',
    })

    .when('/tostadas',{
      templateUrl: 'views/tostadas.html',
      controller: 'TostadasController'
    })

    .when('/snacks',{
      templateUrl: 'views/snacks.html',
      controller: 'SnacksController'
    });

    .when('/gusgueria',{
      templateUrl: 'views/gusgueria.html',
      controller: 'GusgueriaController',
    };

    .otherwise({
      templateUrl: 'views/index.html',
      controller: 'MainController'
    });
    /*
     * Setup Pretty Routing with / vs #
     */
    $locationProvider.html5Mode(true);
});
