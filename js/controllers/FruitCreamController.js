app.controller('FruitCreamController',function($scope) { 
  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size){
    vm.priceObj[index] = vm.fruitCream[index][size]
  };
  vm.fruitCream = [
   {
    name: 'Tutty Basket',
    description: '2 scoops of icecream, cookies, & sprinkles',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Banana Split',
    description: '3 scoops of ice cream with strawberries, pineapples, chocolate syrup & sprinkles',
    small: 6.99,
    large: 0.00
   },
   {
    name: 'Tutty sunday',
    description: '2 scoops of icecream, banana, strawberries, chocolate syrup & sprinkles',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Tutty de todo',
    description: 'Melon, coconut, cucumber, jicama, watermelon, pineapples, orange',
    small: 3.99,
    medium: 4.99,
    large: 6.99
   },
   {
    name: 'Tutty sweet',
    description: 'Apple, strawberries, papaya, melon, grapes',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Tutty nieve',
    description: '2 scoops of icecream with fruit and honey',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Escamocha',
    description: 'Yogurt, honey, apple, strawberries, banana, grapes, melon, granola',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Bionico',
    description: 'Strawberries, apple, grapes, melon, granola, crema de nuez',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Fresas con crema',
    description: 'Strawberries and cream',
    small: 5.99,
    large: 6.99
   },
   {
    name: 'Fresas con platino',
    description: 'Strawberries and banana',
    small: 5.99,
    large: 6.99
   }
   ];

/* check if there is small price */
  vm.checkLeft = function(index) {
    if ( vm.fruitCream[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

/* check if there is medium  price */
  vm.checkMiddle = function(index) {
    if ( vm.fruitCream[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
}

/* check if there is large price */
  vm.checkRight = function(index) {
    if ( vm.fruitCream[index]['large'] ) {
      return true;
    } else {
      return false;
    }
}

});
