console.log('Hello from app.js! Your JavaScript is connected and running!');
import * as orderForm from './order-handler.js';
import * as priceCalculator from './price-calculator.js';
import * as resultsDisplay from './results-display.js';
import * as orderStorage from './order-storage.js';

const orderFormElement = document.getElementById('order-form');
const orders = [];

const handleOrderSubmit = function (event) {
    event.preventDefault();
    const orderData = orderForm.getOrderInputs();
    const calculatedPrice = priceCalculator.calculateTotal(orderData);
    const newOrder = { 
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString(),
    };
    orders.push(newOrder);
    orderStorage.saveOrders(orders);
    console.log(orders);
    resultsDisplay.displayResults(newOrder);
};

const init = function() {
    const loadedOrders = orderStorage.loadOrders();
       if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        console.log("orders loaded from localStorage");
    } else {
        console.log("No orders found in localStorage starting fresh");
    }
    orderFormElement.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed, App is ready for interaction')
    init();
});