app.controller('MainController', ['$scope', function($scope) { 
  $scope.items = [
    {
      title: "Raspas con Fruta - Snow Cones with Fruit",
      view: "raspas"
    },
    {
      title: "Raspas - Snow Cones",
      view: "normalRaspas"
    },
    {
      title: "fruta con nieve - fruit with ice cream ",
      view: "fruitCream"
    },
    {
      title: "TUTTY RAYADAS - TUTTY SHREDDED FRUITS",
      view: "shreddedFruit"
    },
    {
      title: "snacks",
      view: "snacks"
    },
    {
      title: 'Gusgueria',
      view: 'gusgueria'
    }



  ];

  $scope.raspas = [
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/11/13/16/00/fruit-210104_960_720.jpg',
      name: 'Chamoyda',
      description: 'Chamoy, Chile',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2016/04/10/15/13/mangoes-1320111_960_720.jpg',
      name: 'Mangonada',
      description: 'Mango, Chamoy',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/02/14/18/10/pineapple-636562_960_720.jpg',
      name: 'Pinada',
      description: 'Pineapple, Chamoy, Chile',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/07/17/13/44/cucumbers-849269_960_720.jpg',
      name: 'Chamuco',
      description: '(DIABLITO): Tamarindo, Cucumber, Chile, Chamoy',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/06/28/02/13/citrus-824087_960_720.jpg',
      name: 'Palomito',
      description: '(ANGELITO): Lime Flavor, Cucumber, Chamoy',
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2015/06/18/16/46/watermelon-813881_960_720.jpg',
      name: 'Sandillada',
      description: 'Watermelon, Chamoy, Chile',
    }
  ]; /* fruit Cups */

  /*  snow cones */
  $scope.items = [
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Sandia',
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Coconut'
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Mango',
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Tamarindo'
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Chile'
    },
    {
        img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Pina'
    },
    {
      img: 'https://pixabay.com/static/uploads/photo/2014/12/22/00/04/ice-cream-576745_960_720.png',
      name: 'Fresa'
    }
  ];

  $scope.fruitCream = [
   {
    name: 'Tutty Basket',
    description: '2 scoops of icecream, cookies, & sprinkles'
   },
   {
    name: 'Banana Split',
    description: '3 scoops of ice cream with strawberries, pineapples, chocolate syrup & sprinkles'
   },
   {
    name: 'Tutty sunday',
    description: '2 scoops of icecream, banana, strawberries, chocolate syrup & sprinkles'
   },
   {
    name: 'Tutty de todo',
    description: 'Melon, coconut, cucumber, jicama, watermelon, pineapples, orange'
   },
   {
    name: 'Tutty sweet',
    description: 'Apple, strawberries, papaya, melon, grapes'
   },
   {
    name: 'Tutty nieve',
    description: '2 scoops of icecream with fruit and honey'
   },
   {
    name: 'Escamocha',
    cription: '3 scoops of ice cream with strawberries, pineapples, chocolate syrup & sprinkles'
   },
   {
    name: 'Tutty sunday',
    description: '2 scoops of icecream, banana, strawberries, chocolate syrup & sprinkles'
   },
   {
    name: 'Tutty de todo',
    description: 'Melon, coconut, cucumber, jicama, watermelon, pineapples, orange'
   },
   {
    name: 'Tutty sweet',
    description: 'Apple, strawberries, papaya, melon, grapes'
   },
   {
    name: 'Tutty nieve',
    description: '2 scoops of icecream with fruit and honey'
   },
   {
    name: 'Escamocha',
    description: 'Yogurt, honey, apple, strawberries, banana, grapes, melon, granola'
   },
   {
    name: 'Bionico',
    description: 'Strawberries, apple, grapes, melon, granola, crema de nuez'
   },
   {
    name: 'Fresas con crema',
    description: 'Strawberries and cream'
   },
   {
    name: 'Fresas con platino',
    description: 'Strawberries and banana'
   },
   {
    name: 'Bionico',
    description: 'Strawberries, apple, grapes, melon, granola, crema de nuez'
   },
   {
    name: 'Fresas con crema',
    description: 'Strawberries and cream'
   },
   {
    name: 'Fresas con platino',
    description: 'Strawberries and banana'
   }
   ];


}]); /* end of main Controller */





























