// data/cart.js
import {getProduct} from './data-products.js';


export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
cart = [{productId: '1',
    quantity: 2,
    deliveryOptionId: '1'
},
{productId: '2',
quantity: 1,
deliveryOptionId: '2'
}];

}





export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
    matchingItem = cartItem;
    }
    });
        if (matchingItem) {
        matchingItem.quantity += 1;
        } 
        else {
            cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }        
}

export function saveToStorage() {
localStorage.setItem('cart', JSON.stringify(cart));
}


export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    });
return cartQuantity;
}












//The addToCart(productId, quantity) function adds items to the cart by creating a cartItem with the product's id, name, price, and quantity.

//This function calculates the total price of items in the cart.
export function calculateTotal() {
    return cart.reduce((total, item) => { 
       return total + item.price * item.quantity; }, 0); 
    }


    

