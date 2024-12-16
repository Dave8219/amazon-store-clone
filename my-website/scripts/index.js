import {addToCart, cart, removeFromCart, saveToStorage} from '../data/cart.js';





document.querySelectorAll('.js-add-to-cart').forEach((button) => {

    button.addEventListener('click', () => {

        addToCart();
        });

});


   export function updateCartQuantityDisplay() {
        document.querySelector('.js-cart-quantity').innerHTML = `Quantity: ${cart}`;
    
    }


document.querySelector('.js-remove-from-cart').addEventListener('click', () => {
removeFromCart();

updateCartQuantityDisplay();
    saveToStorage();
});
        

//document.querySelector('.js-input-text').innerHTML = 


