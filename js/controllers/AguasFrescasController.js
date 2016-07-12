app.controller('AguasFrescasController', function($scope){

  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.aguasFrescas[index][size]
  };

$scope.aguasFrescas = [
    {
      name: 'Tamarindo',
      image: 'http://www.comoeliminarpeso.com/wp-content/uploads/2012/03/bebidas-para-adelgazar.jpg',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      name: 'Melon',
      image: 'http://www.thelittleepicurean.com/wp-content/uploads/2014/05/cantaloupe-agua-fresca2.jpg',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      name: 'Jamaica',
      image: 'http://drinks.seriouseats.com/images/2013/05/20130505-250973-agua-de-jamaica-chia-2.jpg',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      name: 'Orchata',
      image: 'https://i.ytimg.com/vi/MA6UoWYVX1s/maxresdefault.jpg',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      name: 'Sandia',
      image: 'http://www.wholefoodsmarket.com/sites/default/files/styles/header_recipe/public/media/293-1_0.jpg?itok=t2BjR4MH',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    },
    {
      name: 'Pina',
      image: 'http://dietsinreview.s3.amazonaws.com/diet_column/wp-content/uploads/2013/05/Pineapple-Agua-Fresca-Recipe.jpg',
      small: 1.99,
      medium: 2.99,
      large: 3.99
    }
]

/* if it does not have price hide option to get that size */
  vm.checkLeft = function(index) {
    if (vm.aguasFrescas[index]['small']){  
      return true;
    } else {
      return false;
    }
}

  vm.checkMiddle = function(index) {
    if (vm.aguasFrescas[index]['medium']){  
      return true;
    } else {
      return false;
    }
}

  vm.checkRight = function(index) {
    if (vm.aguasFrescas[index]['large']){  
      return true;
    } else {
      return false;
    }
}





});
