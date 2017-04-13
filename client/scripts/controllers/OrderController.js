myApp.controller('OrderController',['PizzaService', function(PizzaService) {
  console.log('OrderController');
  var order = this;

  order.pizzaOrderObject = PizzaService.pizzaOrderObject;
  order.remove = function(order){
    console.log('Order in controllerOder' , order);
    PizzaService.deleteItem(order);
  };

  // order.confirm = function(order){
  //   console.log('Confirm in controllerOder' , order);
  //   PizzaService.confirmItem(order);
  // };

  order.confirmAll = function(order){
    PizzaService.confirmAll(order);
  };

}]);
