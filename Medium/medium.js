//var sharePizza = cutPizzaSlices(pizzaSlice);

function cutPizzaSlices(pizzaSlice) {
    return `Each person gets ${(8/pizzaSlice).toFixed(2)} pizza slice`;
}


console.log(cutPizzaSlices(2));                                                                                                                                                                    
// prints "Each person gets 4.00 slices of pizza"
console.log(cutPizzaSlices(3)); 
  // prints "Each person gets 2.67 slices of pizza"
