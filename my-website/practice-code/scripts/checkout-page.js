import {cart, removeQuantity, calculateCartQuantity, updateDeliveryOption} from '../scripts/cart.js';
import {getProduct, fruits} from '../scripts/products.js';
import {formatCurrency} from '../scripts/money.js';
import {deliveryOptions, getDeliveryOptions, calculateDeliveryDates} from '../scripts/deliveryDays.js';

renderOrderInfo();
totalPriceCheckout();


function renderOrderInfo() {

let orderSummaryHTML = '';

cart.forEach((cartItem) => {

const fruitId = cartItem.fruitId;
const matchingFruit = getProduct(fruitId);


const deliveryOptionId = cartItem.deliveryOptionId;

const deliveryOption = getDeliveryOptions(deliveryOptionId);

const dateString = calculateDeliveryDates(deliveryOption);


orderSummaryHTML += `

<div class="fruit-container">
    <div class="fruit-info">
<div class="fruit-details">
    <img src="${matchingFruit.images}" class="fruit-images">
<h3>Price: $${formatCurrency(matchingFruit.priceCents)}</h3>
    <h5>Quantity: ${cartItem.quantity}</h5>
</div>
<div class="shipping-info">
    <h2>Shipping Information</h2>
    <div class="shipping-options">
        <h2>Delivery:</h2> 
            <div>${deliveryOptionsHTML(matchingFruit, cartItem)}</div>
    </div>
</div>
</div>
</div>
`
});
return orderSummaryHTML;

}


document.querySelector('.js-checkout-container').innerHTML = renderOrderInfo();



function deliveryOptionsHTML(matchingFruit, cartItem) {
    let html = '';

deliveryOptions.forEach((deliveryOption) => {

const dateString = calculateDeliveryDates(deliveryOption);

const priceString = deliveryOption.priceCents === 0 ? 
'FREE' :
`$${formatCurrency(deliveryOption.priceCents)} -`;

const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

//the matchingProduct.id and deliveryOption.id used together in a class are used to test. Same thing with the js-payment-summary-shipping and js-payment-summary-total in the paymentSummary.js file.  
html += `

<div class="delivery-option js-delivery-option js-delivery-option-${matchingFruit.id}-${deliveryOption.id}"
data-fruit-id="${matchingFruit.id}"
data-delivery-option-id="${deliveryOption.id}">
         
<input type="radio" ${isChecked ? 'checked' : '' }
            class="delivery-option-input js-delivery-option-input-${matchingFruit.id}-${deliveryOption.id}"
            name="delivery-option-${matchingFruit.id}">

            <div>
            <div class="delivery-option-date">
                ${dateString} 
            </div>
            <div class="delivery-option-price">
                ${priceString} Shipping
            </div>
            </div>
            
        </div>
        
    `
});
return html;
}





function totalPriceCheckout() {
let fruitPriceCents = 0;
let shippingPriceCents = 0;
let totalQuantity = 0;

cart.forEach((cartItem) => {
const fruit = getProduct(cartItem.fruitId);

fruitPriceCents += fruit.priceCents * cartItem.quantity;
totalQuantity += cartItem.quantity;

const deliveryOption = getDeliveryOptions(cartItem.deliveryOptionId);
shippingPriceCents += deliveryOption.priceCents;
});

const totalBeforeTaxCents = fruitPriceCents + shippingPriceCents;
const taxCents = totalBeforeTaxCents * 0.1;
const totalCents = totalBeforeTaxCents + taxCents;

const fruitPriceDollars = formatCurrency(fruitPriceCents);

const paymentSummary = `
<div class="grand-total-container">
<div>Total Quantity: ${totalQuantity}</div>
<div>Subtotal: $${fruitPriceDollars}</div>
<div>Shipping: $${formatCurrency(shippingPriceCents)}</div>
<div>Taxes: $${formatCurrency(taxCents)}</div>
<div>Total: $${formatCurrency(totalCents)}</div>
</div>
`;


document.querySelector('.js-total-container').innerHTML = paymentSummary;
}



function attachDeliveryOptionListeners() {
document.querySelectorAll('.js-delivery-option').forEach((element) => {
element.addEventListener('click', () => {
const {fruitId, deliveryOptionId} = element.dataset;

//Either way, the destructuring method works above.^^^
//this was used with productId but used fruitId instead. 
/*const fruitId = element.dataset.productId; <<<<<<<<productId used instead of fruitId, 
which is why it wasn't working*/
//const deliveryOptionId = element.dataset.deliveryOptionId;

updateDeliveryOption(fruitId, deliveryOptionId);
renderOrderInfo();
totalPriceCheckout();

attachDeliveryOptionListeners();
});
});
}

attachDeliveryOptionListeners();