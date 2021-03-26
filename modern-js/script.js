// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { logged: true },
};

const stateClone = cloneDeep.cloneDeep(state);
state.user.logged = false;
console.log(stateClone);

// CommonJS Modules
// Only works in NodeJS
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
//   console.log(`Shipping cost is ${shippingCost}`);
// };

// // Import CommonJS
// const { addToCart } = require('./shoppingCart.js');

// The Module Pattern (old way)
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//     console.log(`Shipping cost is ${shippingCost}`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);

// Importing module
// Named imports
import { addToCart, price, quantity } from './shoppingCart.js';

// Import everything at once
// import * as ShoppingCart from './shoppingCart.js';

// Import the default export
// import add from './shoppingCart.js';

// console.log('Importing module');
// console.log(cart); throws an error

addToCart('apples', 5);
console.log(price, quantity);

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.price, ShoppingCart.quantity);

// add('bananas', 10);

// Parcel relevant only
if (module.hot) module.hot.accept();
