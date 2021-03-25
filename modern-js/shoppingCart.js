// Exporting module
console.log('Exporting module');

// All variables are private to the module
const shippingCost = 10;
const cart = [];
// Named exports
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice as price, totalQuantity as quantity };

// Default exports
// We use it when we want to export only one thing from the module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
