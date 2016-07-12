app.controller('SmoothiesController', function($scope) {
  var vm = $scope;

  vm.priceObj = {}

  vm.setSize = function(index, size) {
    vm.priceObj[index] = vm.smoothies[index][size]
  }

$scope.smoothies = [
        {
          name: 'Fruta at Gusto',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/8b/84/75/8b8475a039bbc4c95f893dc533d5c9dd.jpg',
          small: 4.25,
          large: 5.25
        }
]

  vm.checkLeft = function(index) {
    if( vm.smoothies[index]['small'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkMiddle = function(index) {
    if( vm.smoothies[index]['medium'] ) {
      return true;
    } else {
      return false;
    }
}

  vm.checkRight = function(index) {
    if( vm.smoothies[index]['large'] ) {
      return true;
    } else {
      return false;
    }
}


});
