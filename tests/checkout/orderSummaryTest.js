import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage, cart} from "../../data/cart.js";
import {loadProducts, loadProductsFetch} from '../../data/products.js';

describe('test suite: renderOrderSummary', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

//done is a built-in function for Jasmine
    beforeAll((done) => {
        loadProductsFetch().then(() => {
            done();
        });
    });
    //a hook to run before each test
beforeEach(() => {
    spyOn(localStorage, 'setItem');
    document.querySelector('.js-test-container').innerHTML = 
    `<div class="js-order-summary"></div>
    <div class="js-payment-summary"></div>
    <div class="js-checkout-header"></div>
    `;
    spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{productId: productId1,
            quantity: 2,
            deliveryOptionId: '1'
        },
        {productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
        }]);
    });
    loadFromStorage();
    renderOrderSummary();
});

afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
});


it('displays the cart', () => {
    
expect(
    document.querySelectorAll('.js-cart-item-container').length
).toEqual(2);
expect(
    document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2');

expect(
    document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1');

expect(
    document.querySelector(`.js-product-name-${productId1}`).innerText).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');

expect(
    document.querySelector(`.js-product-name-${productId2}`).innerText).toEqual('Intermediate Size Basketball');

expect(document.querySelector(`.js-product-price-${productId1}`).innerText).toContain('$10.90');

expect(document.querySelector(`.js-product-price-${productId2}`).innerText).toContain('$20.95');
});



it('removes a product', () => {

document.querySelector(`.js-delete-link-${productId1}`).click();
expect(
    document.querySelectorAll('.js-cart-item-container').length
).toEqual(1);

//null because this product has been deleted
expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null);

//it is not null or still in the cart because this product was not deleted
expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null);

//this test confirms that productId2 is still in the cart with its name being displayed correctly
expect(document.querySelector(`.js-product-name-${productId2}`).innerText).toEqual('Intermediate Size Basketball');
//this test checks the price of the product still in the cart is being displayed correctly
expect(document.querySelector(`.js-product-price-${productId2}`).innerText).toContain('$20.95');

//once we click delete, the cart array is also correct
expect(cart.length).toEqual(1);
expect(cart[0].productId).toEqual(productId2);

});

it('it updates the delivery option', () => {
document.querySelector(`.js-delivery-option-${productId1}-3`).click();

expect(document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked).toEqual(true);
    
expect(cart.length).toEqual(2);
expect(cart[0].productId).toEqual(productId1);
expect(cart[0].deliveryOptionId).toEqual('3');
expect(document.querySelector('.js-payment-summary-shipping').innerText).toEqual('$14.98');
expect(document.querySelector('.js-payment-summary-total').innerText).toEqual('$63.50');
});
});

