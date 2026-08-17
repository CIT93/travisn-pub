console.log('Hello from app.js! Your JavaScript is connected and running!');

const totalDisplayElement = document.getElementById('total-display');
const addItemButton = document.getElementById('add-item-btn');
const itemPrice = 15;

let totalCost = 0;

const handleButtonClick = function() {
    totalCost += itemPrice;
    let message = `Current Total: $${totalCost}`;
    if (totalCost >= 180) {
        message += ' stop';
        totalDisplayElement.style.color = 'red';
    } else if (totalCost >= 150) {
        message += ' please...';
        totalDisplayElement.style.color = 'red';
    } else if (totalCost >= 105) {
        message += ' What are you doing?! Stop spending!';
        totalDisplayElement.style.color = 'red';
    } else if (totalCost >= 60) {
        message += ' Wow, you are a super buyer! But now you have gone over budget!';
        totalDisplayElement.style.color = 'red';
    } else {
        totalDisplayElement.style.color = '#000000';
    }
    totalDisplayElement.textContent = message;
    console.log(`Button Clicked! Current total cost: ${totalCost}`);
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed, App is ready for interaction')
    addItemButton.addEventListener('click', handleButtonClick);
    totalDisplayElement.textContent = 'Welcome, click the button below to start buying';
});