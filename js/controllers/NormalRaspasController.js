app.controller('NormalRaspasController', function($scope) { 

  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.items[index][size]
  };
  /*  snow cones */
  vm.items = [
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Sandia',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Coconut',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Mango',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Tamarindo',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Chile',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Pina',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Fresa',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    }
  ];

  vm.checkLeft = function(index) {
    if (vm.items[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkMiddle = function(index) {
    if (vm.items[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkRight = function(index) {
    if (vm.items[index]['large'] ) {
      return true;
    } else {
      return false;
    }
}


});
