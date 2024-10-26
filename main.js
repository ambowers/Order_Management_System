// Task 2 Add event listener for product selection

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');


        // Task 3 Calculate total price dynamically
            //calculate total price when user selects a product and enters a quantity
function updateTotalPrice (){
    const productPrice= parseFloat(productSelector.value);
    const quantity= parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent = totalPrice.toFixed(2)
}
//event listeners for product selection
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);



// Task 4 Handle Order Submission

placeOrderButton.addEventListener('click', function(){
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;

    orderSummary.textContent = `Model: ${selectedProduct}, Quantity: ${quantity}... Total Price = $${totalPrice}`;
});
