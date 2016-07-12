app.controller('LicuadosController', function($scope){

  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.licuados[index][size]
  }

 vm.licuados = [
    {
      image: 'http://javierchirinos.com/wp-content/uploads/2015/08/licuados-masa-muscular.jpg',
      name: 'Licuados',
      description: 'Banana Papaya, Fresa a de tu Preferncia',
      small: 3.99,
      large: 4.99
    }
]

/* check if there is small price */
  vm.checkLeft = function(index) {
    if ( vm.licuados[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkMiddle = function(index) {
    if ( vm.licuados[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkRight = function(index) {
    if ( vm.licuados[index]['large'] ) {
      return true;
    } else {
      return false;
    }
}

});
