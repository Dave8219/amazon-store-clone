import {validDeliveryOption} from './deliveryOptions.js';

function Cart(localStorageKey) {
    const cart = {

        cartItems: undefined,
        
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        
            if (!this.cartItems) {
            this.cartItems = [{productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },
            {productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
            }];
            }
        },
    
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
    
        addToCart(productId) {
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
            });
                if (matchingItem) {
                matchingItem.quantity += 1;
                } 
                else {
                    this.cartItems.push({
                        productId: productId,
                        quantity: 1,
                        deliveryOptionId: '1'
                    });
                }
        
                this.saveToStorage();
        },
    
        removeFromCart(productId) {
            const newCart = [];
            
            this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
            newCart.push(cartItem);
            }
            });
            this.cartItems = newCart;
            this.saveToStorage();
            },
    
            calculateCartQuantity() {
                let cartQuantity = 0;
                this.cartItems.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
                });
            return cartQuantity;
            },
    
    
            updateQuantity(productId, newQuantity) {
                let matchingItem;
            
                this.cartItems.forEach((cartItem) => {
                    if (productId === cartItem.productId) {
                        matchingItem = cartItem;
                            }
                });
                
            matchingItem.quantity = newQuantity;
               this.saveToStorage(); 
            },
    
    
            updateDeliveryOption(productId, deliveryOptionId) {
                let matchingItem;
                    this.cartItems.forEach((cartItem) => {
                    if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                    }
                    });
                if (!matchingItem) {
                return;
                }
                
                if (!validDeliveryOption(deliveryOptionId)) {
                return;
                }
                
                matchingItem.deliveryOptionId = deliveryOptionId;
                this.saveToStorage();
                }
    
    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);















/*This verifies the object is working - cart is the object while the function is the method. Variables and values alike can be called properties like cart.cartItems, while a function is called a method - cart.addToCart('');
cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
console.log(cart);*/

/*copy of the first object cart, renamed the business cart - ***don't use this copy/paste method, use functions instead
const businessCart = {

    cartItems: undefined,
    
    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem('cart-business'));
    
        if (!this.cartItems) {
        this.cartItems = [{productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        },
        {productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
        }];
        }
    },

    saveToStorage() {
        localStorage.setItem('cart-business', JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
        matchingItem = cartItem;
        }
        });
            if (matchingItem) {
            matchingItem.quantity += 1;
            } 
            else {
                this.cartItems.push({
                    productId: productId,
                    quantity: 1,
                    deliveryOptionId: '1'
                });
            }
    
            this.saveToStorage();
    },

    removeFromCart(productId) {
        const newCart = [];
        
        this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
        newCart.push(cartItem);
        }
        });
        this.cartItems = newCart;
        this.saveToStorage();
        },

        calculateCartQuantity() {
            let cartQuantity = 0;
            this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
            });
        return cartQuantity;
        },


        updateQuantity(productId, newQuantity) {
            let matchingItem;
        
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                        }
            });
            
        matchingItem.quantity = newQuantity;
           this.saveToStorage(); 
        },


        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
                this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                matchingItem = cartItem;
                }
                });
            if (!matchingItem) {
            return;
            }
            
            if (!validDeliveryOption(deliveryOptionId)) {
            return;
            }
            
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
            }

};

businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);
*/

























