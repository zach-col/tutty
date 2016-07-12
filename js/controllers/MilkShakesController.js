app.controller('MilkShakesController', function($scope){

  var vm =  $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.milkShakes[index][size]
  };
  $scope.milkShakes = [
    {
      name: 'Chocolate',
      image: 'http://d28h4ey7qefd3m.cloudfront.net/wp-content/uploads/2010/12/Chocolate_Milkshake.jpg',
      small: 3.99,
      large: 4.99
    },
    {
      name: 'Vainilla',
      image: 'http://www.coldstonecreamery.com/assets/img/products/shakes/veryvanilla.jpg',
      small: 3.99,
      large: 4.99
    }
]

/* check if there is a small price */
  vm.checkLeft = function(index) {
    if ( vm.milkShakes[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkMiddle = function(index) {
    if ( vm.milkShakes[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkRight = function(index) {
    if ( vm.milkShakes[index]['large'] ) {
      return true;
    } else {
      return false;
    }
}

});
