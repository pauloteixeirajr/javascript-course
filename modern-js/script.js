// Importing module
// Named imports
// import { addToCart, price, quantity } from './shoppingCart.js';

// Import everything at once
// import * as ShoppingCart from './shoppingCart.js';

// Import the default export
import add from './shoppingCart.js';

console.log('Importing module');
// console.log(cart); throws an error

// addToCart('apples', 5);
// console.log(price, quantity);

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.price, ShoppingCart.quantity);

add('bananas', 10);
