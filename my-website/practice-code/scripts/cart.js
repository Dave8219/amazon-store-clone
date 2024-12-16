import {validDeliveryOptions} from "../scripts/deliveryDays.js";

export let cart = [];

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = [{fruitId: '1',
            quantity: 2,
            deliveryOptionId: '1'
        },
        {fruitId: '2',
        quantity: 1,
        deliveryOptionId: '2'
        }];
        }
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}





export function addFruits(fruitId) {
let matchingItem;
cart.forEach((cartItem) => {

if (fruitId === cartItem.fruitId) {
matchingItem = cartItem;
}
});

if (matchingItem) {
    matchingItem.quantity += 1 - 1;
}

else {
    cart.push({
fruitId: fruitId,
quantity: 1
    });
}

saveToStorage();

console.log('Current cart:', cart);
console.log(`Adding fruitId: ${fruitId}`);

    }





    export function calculateCartQuantity() {
        let cartQuantity = 0;
    cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    });
return cartQuantity;
    }


   
   
export function removeQuantity(fruitId) {

const newCart = [];

cart.forEach((cartItem) => {
if (cartItem.fruitId !== fruitId) {
newCart.push(cartItem);
}
});
cart = newCart;
saveToStorage();

    }



    export function updateDeliveryOption(fruitId, deliveryOptionId) {
        let matchingItem;
        cart.forEach((cartItem) => {
        if (fruitId === cartItem.fruitId) {
        matchingItem = cartItem;
        }
        });
    if (!matchingItem) {
    return;
    }

    if (!validDeliveryOptions(deliveryOptionId)) {
        return;
        }
        
        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();
        }
        
        