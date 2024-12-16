import { updateCartQuantityDisplay } from "../scripts/index.js";


export let cart = 0;

loadFromStorage();
updateCartQuantityDisplay();



export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));  
}


export function saveToStorage() {
localStorage.setItem('cart', JSON.stringify(cart));
}



export function addToCart() {
cart += 1;

saveToStorage();
updateCartQuantityDisplay();
return cart;

}


export function removeFromCart() {
    cart -= 1;
    return cart;
}




/*function removeFromCart() {

}



function removeFromCart(productId) {
    const newCart = [];
    
    cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
    newCart.push(cartItem);
    }
    });
    cart = newCart;
    saveToStorage();
    }
    */