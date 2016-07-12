app.controller('RaspasController', function($scope) { 

  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.raspas[index][size]
  };

  vm.raspas = [
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/11/13/16/00/fruit-210104_960_720.jpg',
      name: 'Chamoyda',
      description: 'Chamoy, Chile',
      small: 1.99,
      medium: 2.99,
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2016/04/10/15/13/mangoes-1320111_960_720.jpg',
      name: 'Mangonada',
      description: 'Mango, Chamoy',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/02/14/18/10/pineapple-636562_960_720.jpg',
      name: 'Pinada',
      description: 'Pineapple, Chamoy, Chile',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/07/17/13/44/cucumbers-849269_960_720.jpg',
      name: 'Chamuco',
      description: '(DIABLITO): Tamarindo, Cucumber, Chile, Chamoy',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/06/28/02/13/citrus-824087_960_720.jpg',
      name: 'Palomito',
      description: '(ANGELITO): Lime Flavor, Cucumber, Chamoy',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/06/18/16/46/watermelon-813881_960_720.jpg',
      name: 'Sandillada',
      description: 'Watermelon, Chamoy, Chile',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      image: 'https://s-media-cache-ak0.pinimg.com/564x/f3/78/6f/f3786fd1bae8bf78b18db295ed6bb705.jpg',
      name: 'Rusa',
      description: 'Squirt (soda grapefruit), All fruits, Pinapple, Chamoy',
      small: 4.50,
      medium: 5.50,
      large: 6.99
    },
    {
      image: '#',
      name: 'Alvianate',
      description: 'Para cuando andes crudo',
      small: 4.50,
      medium: 5.50,
      large: 6.99
    }
  ]; /* fruit Cups */

/* check if there is small price */
  vm.checkLeft = function(index) {
    if ( vm.raspas[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

/* check if there is medium price */
  vm.checkMiddle = function(index) {
    if ( vm.raspas[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
  }
  
/* check if there is a large price */

  vm.checkRight = function(index) {
    if ( vm.raspas[index]['large']) {
      return true;
    } else {
      return false;
    }
}


});
