import { cart } from "../../data/cart.js";

export function renderCheckoutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const checkoutHeaderHTML = `
      <div class="header-content">
        <div class="checkout-header-left-section">
          <a href="index.html">
            <img class="main-logo" src="images/generic-logo.jpeg">
            <img class="main-mobile-logo" src="images/generic-logo.jpeg">
          </a>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (<a class="return-to-home-link"
            href="index.html">${cartQuantity} Items</a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png">
        </div>
      </div>
        `;

  document.querySelector(".js-checkout-header").innerHTML = checkoutHeaderHTML;
}
