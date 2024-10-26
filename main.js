// Task 2 Add event listener for product selection

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

//function for when product is selected, price is updated
function updateTotalPrice (){
    const productPrice= parseFloat(productSelector.value);
    const quantity= parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent = totalPrice.toFixed(2)
}
//event listeners for product selection
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);