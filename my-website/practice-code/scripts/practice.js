 import {fruits, getProduct} from '../scripts/products.js';
 import {cart, addFruits, loadFromStorage, saveToStorage, calculateCartQuantity, removeQuantity} from '../scripts/cart.js';
 import { formatCurrency } from '../scripts/money.js';
 import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
 
 
console.log(dayjs().format('YYYY-MM-DD'));


updateCartQuantity();
renderPaymentSummary();
renderCartSummary();
loadFromStorage();


//this is a for loop that prints the multiplication table for 5 (from 1 to 10)
let table = '';
  for (let i = 1; i <= 10; i++) {
table += (`5 x ${i} = ${5 * i}<br>`);
}

document.querySelector('.js-multiplication-table').innerHTML = table;


let htmlText = '';

fruits.forEach((fruit) => {

    htmlText += `
    <div class="fruit-info">
        <img class="images" src="${fruit.images}">
        <div class="title-text">${fruit.name}</div>
        <div class="price-fruits">$${formatCurrency(fruit.priceCents)}</div> 
        <div class="input-selector">
            <select class="quantity-selector js-quantity-selector-${fruit.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>
        <div class="add-button-container">
<button class="add-button js-add-button" data-fruit-id="${fruit.id}">
    Add
    </button>
    </div>
</div>
   `
});


document.querySelector('.js-fruits-container').innerHTML = htmlText;



function renderCartSummary() {
    let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
    
        const fruitId = cartItem.fruitId;
        const matchingFruit = getProduct(fruitId);
    
        cartSummaryHTML += `<div>
        Cart Summary:<br>
        ${matchingFruit.name}: ${cartItem.quantity} 
            <button class="js-delete-button" data-fruit-id="${cartItem.fruitId}">Delete</button>
            <br>
    </div>`;
    });
    
    document.querySelector('.js-fruits-quantity').innerHTML = cartSummaryHTML;


    document.querySelectorAll('.js-delete-button').forEach((button) => {
        button.addEventListener('click', () => {
        const fruitId = button.dataset.fruitId;
        removeQuantity(fruitId);
        renderCartSummary();
        renderPaymentSummary();
        updateCartQuantity();
        saveToStorage();
        });
        });



}








function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    }



function renderPaymentSummary() {
    let fruitPriceCents = 0;
    let totalQuantity = 0;
cart.forEach((cartItem) => {
const fruit = getProduct(cartItem.fruitId);

fruitPriceCents += fruit.priceCents * cartItem.quantity;
totalQuantity += cartItem.quantity;

});

const fruitPriceDollars = formatCurrency(fruitPriceCents);

const paymentSummary = `
<div>Total Quantity: ${totalQuantity}</div>
<div>Total: $${fruitPriceDollars}</div>
`;

document.querySelector('.js-total-quantity').innerHTML = paymentSummary;

}






document.querySelectorAll('.js-add-button').forEach((button) => {
    button.addEventListener('click', () => {
        const fruitId = button.dataset.fruitId;

        let matchingItem;
            cart.forEach((item) => {
              if (fruitId === item.fruitId) {
                matchingItem = item;
              }
            });

        const quantitySelector = document.querySelector(`.js-quantity-selector-${fruitId}`);
        const quantity = Number(quantitySelector.value);


if (matchingItem) {
matchingItem.quantity += quantity;
}

else {
    cart.push({
fruitId: fruitId,
quantity: quantity
    });
}

addFruits(fruitId);
//calculateCartQuantity();
updateCartQuantity();
renderCartSummary();
renderPaymentSummary();
//saveToStorage();
    
}); 
});


//*************document.querySelector('.js-cart-quantity').innerHTML = ;***********************











    
    
    
    
    
    