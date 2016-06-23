app.controller('MainController', function($scope, $location) { 

  var vm = $scope;

  vm.hover = {};

  vm.image = 'http://servinox.com.mx/blog/wp-content/uploads/2014/05/aguas-frescas-2.jpg';

  /*
  vm.showImg = function(index) {
    vm.hover[index] = true;
  }

  vm.hideImg = function(index) {
    vm.hover[index] = false;
  }
  */

  vm.goTo = function(link) {
    var newPath = '/' + link;
    console.log(newPath);
    $location.path(newPath);
  }

  /*
   * Setup Card titles for index.html view
   */
  vm.cardTitles = [
    {
      'name': 'Raspas Con Fruta - Snow Cones With Fruit',
      'link': 'raspas',
      'img': ''
    },
    { 
      'name': 'Raspas - Snow Cones',
      'img': ''
    },
    {
      'name': 'Fruta Con Crema - Fruit with creme',
      'img': ''
    },
    {
      'name': 'Shredded Fruit',
      'img': ''
    },
    {
      'name': 'Quesadillas',
      'img': ''
    },
    {
      'name': 'Tostadas',
      'img': ''
    },
    {
      'name': 'Snack\'s',
      'img': ''
    },
    {
      'name': 'Gusgueria',
      'img': ''
    },
    {
      'name': 'Tortas',
      'img': ''
    },
    {
      'name': 'Ensaladas',
      'img': ''
    },
    { 
      'name': 'Licuados',
      'img': ''
    },
    {
      'name': 'Milk Shakes',
      'img': ''
    },
    {
      'name': 'Smoothies',
      'img': ''
    },
    {
      'name': 'Aguas Frescas',
      'img': ''
    },
    {
      'name': 'Kid\'s Menu',
      'img': ''
    },
    {
      'name': 'Jugos',
      'img': ''
    }
  ];

}); /* end of main Controller */
