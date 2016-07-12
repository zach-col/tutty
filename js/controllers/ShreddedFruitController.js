app.controller('ShreddedFruitController',function($scope) { 
  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.shreddedFruit[index][size]
  };
   $scope.shreddedFruit = [
    {
      name: 'Tutty rayadas',
      description: 'Jicama, cucumber, chile',
      small: 4.99,
      large: 5.99
    },
    {
      name: 'Rayada mix',
      description: 'Carrots, cucumber, jicama, betabel, chile',
      small: 5.75,
      large: 6.75
    },
    {
      name: 'Cuery frutty',
      description: 'Cueritos, cucumber, jicama, chile',
      small: 5.75,
      large: 6.75
    }
]

/* check if there is small price */
  vm.checkLeft = function(index) {
    if ( vm.shreddedFruit[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkMiddle = function(index) {
    if ( vm.shreddedFruit[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkRight = function(index) {
    if ( vm.shreddedFruit[index]['large'] ) {
      return true;
    } else {
      return false;
    }
}


});





