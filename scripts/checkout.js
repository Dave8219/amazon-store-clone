import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
// import '../data/car.js';
import {loadCart} from '../data/cart.js';




Promise.all([
    new Promise((resolve) => {    
        loadProducts(() => { 
            resolve('value1');
        });
        }),
        new Promise((resolve) => {
            loadCart(() => {
            resolve();
            });
        }) 

]).then((values) => {
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});




/*
new Promise((resolve) => {    
loadProducts(() => { 
    resolve('value1');
});

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
        resolve();
        });
    });

}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*callbacks, then renders the rest of the page. Too many callbacks creates nesting, which is messy.
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/

