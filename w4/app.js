console.log('Hello from app.js! Your JavaScript is connected and running!');
import * as orderForm from './order-handler.js';
import * as priceCalculator from './price-calculator.js';

const orderFormElement = document.getElementById('order-form');
const orderSummaryElement = document.getElementById('order-summary');

const lexicalQuantity = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
};

const handleOrderSubmit = function (event) {
    event.preventDefault();
    const orderData = orderForm.getOrderInputs();
    const lexicalQty = lexicalQuantity[orderData.qty] || orderData.qty;
    let shirtNoun = 't-shirts';
    if (orderData.qty === 1) {
        shirtNoun = 't-shirt';
    };
    let message = `Ordered ${lexicalQty} ${orderData.size} ${shirtNoun}.`;
    if (orderData.giftWrap) {
        message = `Ordered ${lexicalQty} ${orderData.size} ${shirtNoun}, gift wrapped.`;
    };
    orderSummaryElement.textContent = message;
    console.log(`Total Price: $${priceCalculator.calculateTotal(orderData).totalPrice}`);
};

const init = function() {
    orderFormElement.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed, App is ready for interaction')
    init();
});