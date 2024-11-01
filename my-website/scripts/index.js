import {addToCart, cart} from '../data/cart.js';





document.querySelector('.js-add-to-cart').addEventListener('click', () => {

    addToCart();
    });
    
    
   export function updateCartQuantityDisplay() {
        document.querySelector('.js-cart-quantity').innerHTML = `Quantity: ${cart}`;
    
    }
        