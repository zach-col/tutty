app.controller('MainController', ['$scope', function($scope) { 
  /* fruit cups --> */
  $scope.fruitCups = [
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/11/13/16/00/fruit-210104_960_720.jpg',
      name: 'Chamoyda',
      description: 'Chamoy, Chile',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2016/04/10/15/13/mangoes-1320111_960_720.jpg',
      name: 'Mangonada',
      description: 'Mango, Chamoy',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/02/14/18/10/pineapple-636562_960_720.jpg',
      name: 'Pinada',
      description: 'Pineapple, Chamoy, Chile',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/07/17/13/44/cucumbers-849269_960_720.jpg',
      name: 'Chamuco',
      description: '(DIABLITO): Tamarindo, Cucumber, Chile, Chamoy',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/06/28/02/13/citrus-824087_960_720.jpg',
      name: 'Palomito',
      description: '(ANGELITO): Lime Flavor, Cucumber, Chamoy',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/06/18/16/46/watermelon-813881_960_720.jpg',
      name: 'Sandillada',
      description: 'Watermelon, Chamoy, Chile',
    }
  ]; /* fruit Cups */
 
  /*  snow cones */
  $scope.snowCones = [
    {
      name: 'Sandia',
    },
    {
      name: 'Coconut'
    },
    {
      name: 'Mango',
    },
    {
      name: 'Tamarindo'
    },
    {
      name: 'Chile'
    },
    {
      name: 'Pina'
    },
    {
      name: 'Fresa'
    }
  ];

  $scope.snowConesPrice = [
  {
    size: '12 oz.',
    price: 1.99
  },
  {
    size: '16 oz',
    price: 2.99
  },
  {
    size: '32 oz',
    price: 3.99
  }]

$scope.fruitCream = [{
  name: 'Tutty Basket',
  description: '2 scoops of icecream, cookies, & sprinkles'
 },
 {
  name: 'Banana Split',
  description: '3 scoops of ice cream with strawberries, pineapples, chocolate syrup & sprinkles'
 },
 {
  name: 'Tutty sunday',
  description: '2 scoops of icecream, banana, strawberries, chocolate syrup & sprinkles'
 },
 {
  name: 'Tutty de todo',
  description: 'Melon, coconut, cucumber, jicama, watermelon, pineapples, orange'
 },
 {
  name: 'Tutty sweet',
  description: 'Apple, strawberries, papaya, melon, grapes'
 },
 {
  name: 'Tutty nieve',
  description: '2 scoops of icecream with fruit and honey'
 },
 {
  name: 'Escamocha',
  description: 'Yogurt, honey, apple, strawberries, banana, grapes, melon, granola'
 },
 {
  name: 'Bionico',
  description: 'Strawberries, apple, grapes, melon, granola, crema de nuez'
 },
 {
  name: 'Fresas con crema',
  description: 'Strawberries and cream'
 },
 {
  name: 'Fresas con platino',
  description: 'Strawberries and banana'
 }
 ];

 $scope.tuttyFruits = [
  {
    name: 'Tutty rayadas',
    description: 'Jicama, cucumber, chile',
  },
  {
    name: 'Rayada mix',
    description: 'Carrots, cucumber, jicama, betabel, chile',
  },
  {
    name: 'Cuery frutty',
    description: 'Cueritos, cucumber, jicama, chile'
  }]

$scope.snacks = [
  {
    name: 'Nachos',
    description: 'Queso y Japapenos',
    price: 4.25
  },
  {
    name: 'Salchipulpos',
    description: 'Mostaza, mayonesa, crema',
    price: 2.99
  },
  {
    name: 'Chicharron',
    description: 'Cueritos, crema, repollo, frijoles, queso, aguacate, pico',
    price: 5.99
  },
  {
    name: 'Dorilocos',
    description: 'Cueritos, crema, repollo, queso, elote, aguacate, pico',
    price: 5.99
  }]

$scope.gusgueria = [
  {
    name: 'Fruitos con queso',
    description: 'Fritos, elote, crema, chile con queso',
    price: 4.50
  }]

$scope.tortas = [
  {
    name: 'Cubana',
    price: 6.99
  },
  {
    name: 'Hawaiana',
    price: 6.99
  },
  {
    name: 'Jamon',
    price: 6.99
  },
  {
    name: 'Chicken Fajita',
    price: 6.99
  }]

$scope.quesadillas = [
  {
    name: 'Chicken fajita quesadilla',
    price: 6.99
  },
  {
    name: 'Beef fajita quesadilla',
    price: 6.99
  },
  {
    name: 'Cheese quesadilla',
    price: 5.99
  },
  {
    name: 'Sincronizadas',
    price: 5.99
  }]

$scope.tostadas = [
  {
    name: 'Cueritos',
    price: 3.50
  },
  {
    name: 'Pierna',
    price: 3.50
  },
  {
    name: 'Ceviche',
    price: 4.25
  },
  {
    name: 'Camaron',
    price: 4.25
  },
  {
    name: 'Cocktel de Camaron',
    price: 8.99
  }]


}]);





























