
// index.js
import { addToCart, calculateTotal, cart } from './data-cart.js';
import { formatCurrency } from './utils-format.js';

// Adding products to the cart
addToCart(/*productID*/"1", 2/*Quantity*/); // Add 2 T-Shirts
addToCart("2", 1); // Add 1 pair of Jeans
addToCart("3", 3); // Add 3 pairs of Sneakers

// Calculate total price
const total = calculateTotal();

// Display cart contents
console.log("Cart Contents:");
cart.forEach(item => {
    console.log(`${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`);
});

// Display total price
console.log(`Total: ${formatCurrency(total)}`);



