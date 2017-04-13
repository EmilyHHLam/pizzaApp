myApp.factory('PizzaService', function() {

  smallPrice = 6;
  mediumPrice = 7;
  largePrice = 8;
  toppingsPrice = 1;

  var pizzaOrderObject = {
    orders : [],

  };

  var confirmedPizzaObject = {
    orders: [],
    total: Number
  };

  confirmedPizzaObject.total= 0;

  var getPrice = function(order) {
    var price = 0;
    switch (order.size) {
      case 'small':
          price += smallPrice;
        break;
      case 'medium':
          price += mediumPrice;
        break;
      case 'large':
          price += largePrice;
        break;
      default:
    }
    if (order.topping) {
      price += toppingsPrice;
    }
    return price;
  };

  var submitOrder = function(order) {
    order.price = getPrice(order);
    pizzaOrderObject.orders.push(order);
  };

  var deleteItem = function(order){
    // console.log('Delete item' , order);
    var index = pizzaOrderObject.orders.indexOf(order);
    pizzaOrderObject.orders.splice(index,1);
  };

  var confirmItem = function(order){
    // console.log('confirm item' , order.price);
    confirmedPizzaObject.orders.push(order);
    confirmedPizzaObject.total += order.price;
    // console.log('total' + confirmedPizzaObject.total);
    //to delele from the orderview
    var index = pizzaOrderObject.orders.indexOf(order);
    pizzaOrderObject.orders.splice(index,1);
    console.log('confirm item=' , pizzaOrderObject.orders);
  };

  var confirmAll = function() {
    // console.log('confirming all, number of pizzas is: ' + pizzaOrderObject.orders.length);
    for (var j = 0; j < pizzaOrderObject.orders.length; j++) {
      confirmedPizzaObject.orders.push(pizzaOrderObject.orders[j]);
    }
    confirmedPizzaObject.total = 0;
    for (var i = 0; i < confirmedPizzaObject.orders.length; i++) {
      confirmedPizzaObject.total += confirmedPizzaObject.orders[i].price;
    }
    pizzaOrderObject.orders = [];
  };

  return {
    pizzaOrderObject: pizzaOrderObject,
    confirmedPizzaObject: confirmedPizzaObject,
    confirmAll:confirmAll,
    submitOrder: submitOrder,
    deleteItem : deleteItem,
    confirmItem: confirmItem
  };
});
