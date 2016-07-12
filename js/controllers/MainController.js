app.controller('MainController', function($scope, $location) { 

  var vm = $scope;

  vm.hover = {};
  /*
  vm.image = 'http://servinox.com.mx/blog/wp-content/uploads/2014/05/aguas-frescas-2.jpg';
*/
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
      'img': 'http://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/b/fb/bfb33a0c-4067-563f-a5da-3ca8f3fb4a5e/bfb33a0c-4067-563f-a5da-3ca8f3fb4a5e.image.jpg'
    },
    { 
      'name': 'Raspas - Snow Cones',
      'link': 'normalRaspas',
      'img': 'http://img.ccrd.clearchannel.com/media/mlib/748/2015/04/default/raspa_0_1429575960.jpg'
    },
    {
      'name': 'Fruta Con Crema - Fruit with creme',
      'link': 'fruitCream',
      'img': 'https://s-media-cache-ak0.pinimg.com/736x/27/e5/31/27e531e768eaa6add1788fd9ab808649.jpg'
    },
    {
      'name': 'Shredded Fruit',
      'link': 'shreddedFruit',
      'img':'https://s-media-cache-ak0.pinimg.com/564x/a1/bb/cd/a1bbcd635b79826faea630eb93250f08.jpg'
    },
    {
      'name': 'Quesadillas',
      'img': 'http://www.livingstonpromise.org/wp-content/uploads/2014/08/Quesadilla.jpg',
      'link': 'quesadillas'
    },
    {
      'name': 'Tostadas',
      'img': 'http://www.simplyrecipes.com/wp-content/uploads/2009/09/mexican-tostada-horiz-b-600.jpg',
      'link': 'tostadas'
    },
    {
      'name': 'Snack\'s',
      'img': 'http://deltaco.com/files/menu/item/nachos.png',
      'link': 'snacks'
    },
    {
      'name': 'Gusgueria',
      'img': 'http://quesosnavarro.com/imagenes/receta/original/Fruta-gde.jpg',
      'link': 'gusgueria'
    },
    {
      'name': 'Tortas',
      'img': 'http://www.seriouseats.com/images/2013/10/20130920-tortas-los-picudos-2.jpg',
      'link': 'tortas'
    },
    {
      'name': 'Ensaladas',
      'img': 'http://www.cadenadial.com/wp-content/uploads/2014/11/imagen-plato-saludable.jpg',
      'link': 'ensaladas'
    },
    { 
      'name': 'Licuados',
      'img': 'http://img.hombresconestilo.com/wp-content/uploads/2010/10/batidos-y-licuados.jpg',
      'link': 'licuados'
    },
    {
      'name': 'Milk Shakes',
      'img': 'http://mygreynomads.com/wp-content/uploads/2015/06/milkshake.jpg',
      'link': 'milkShakes'
    },
    {
      'name': 'Smoothies',
      'img': 'http://www.ecokarma.net/wp-content/uploads/2016/03/The-Best-Smoothie-Makers.jpg',
      'link': 'smoothies'
    },
    {
      'name': 'Aguas Frescas',
      'img': 'http://servinox.com.mx/blog/wp-content/uploads/2014/05/aguas-frescas-2.jpg',
      'link': 'aguasFrescas'
    },
    {
      'name': 'Kid\'s Menu',
      'img': '',
      'link': 'kidsMenu'
    },
    {
      'name': 'Jugos',
      'img': 'http://sprites.comohacerpara.com/img/05557g-obtener-beneficios-distintos-jugos-naturales.jpg',
      'link': 'jugos'
    }
  ];

}); /* end of main Controller */
