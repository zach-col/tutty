app.controller('SnacksController', function($scope) { 
  $scope.snacks = [
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/01/08/01/13/nachos-74202_960_720.jpg',
      name: 'Nachos',
      description: 'Queso y Japapenos',
      price: 4.25
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/01/08/01/13/nachos-74202_960_720.jpg',
      name: 'Salchipulpos',
      description: 'Mostaza, mayonesa, crema',
      price: 2.99
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/01/08/01/13/nachos-74202_960_720.jpg',
      name: 'Chicharron',
      description: 'Cueritos, crema, repollo, frijoles, queso, aguacate, pico',
      price: 5.99
    },
    {
      image: 'https://pixabay.com/static/uploads/photo/2013/01/08/01/13/nachos-74202_960_720.jpg',
      name: 'Dorilocos',
      description: 'Cueritos, crema, repollo, queso, elote, aguacate, pico',
      price: 5.99
    }
  ]
  
});
