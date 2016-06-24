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
      'link': 'normalRaspas',
      'img': ''
    },
    {
      'name': 'Fruta Con Crema - Fruit with creme',
      'link': 'fruitCream',
      'img': ''
    },
    {
      'name': 'Shredded Fruit',
      'link': 'shreddedFruit',
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
      'img': '',
      'link': 'tortas'
    },
    {
      'name': 'Ensaladas',
      'img': '',
      'link': 'ensaladas'
    },
    { 
      'name': 'Licuados',
      'img': '',
      'link': 'licuados'
    },
    {
      'name': 'Milk Shakes',
      'img': '',
      'link': 'milkShakes'
    },
    {
      'name': 'Smoothies',
      'img': '',
      'link': 'smoothies'
    },
    {
      'name': 'Aguas Frescas',
      'img': '',
      'link': 'aguasFrescas'
    },
    {
      'name': 'Kid\'s Menu',
      'img': '',
      'link': 'kidsMenu'
    },
    {
      'name': 'Jugos',
      'img': '',
      'link': 'jugos'
    }
  ];

}); /* end of main Controller */
