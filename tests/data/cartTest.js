import {addToCart, cart, loadFromStorage} from "../../data/cart.js";



describe('test suite: add to cart', () => {
beforeEach(() => {
    spyOn(localStorage, 'setItem');
});

it('add an existing product to the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]);
    });
    loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
    }]));
});



it('adds a new product to the cart', () => {
    //setup the test
//creates a spy to track calls to localStorage.setItem
//spyOn(localStorage, 'setItem'); ****moved to the beforeEach hook***
//this mocks the getItem method to return an empty cart array at the start of the test
spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([]);
});
//the loadFromStorage function initializes the cart from the mocked localStorage.getItem starting with an empty cart
loadFromStorage();
//this adds the product to the cart with its ID and quantity of 1
addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

//tests start
//this test verifies that there is exactly one item in the cart
expect(cart.length).toEqual(1);
//this test checks that localStorage.setItem was called exactly once
expect(localStorage.setItem).toHaveBeenCalledTimes(1);
//this test confirms that localStorage.setItem was called with the correct key and value - a stringified cart containing one item with quanity: 1
expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
}]));
//this test checks that the correct product was added to the cart
expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//this test ensures that the added product has a quantity of 1
expect(cart[0].quantity).toEqual(1);
});
});
