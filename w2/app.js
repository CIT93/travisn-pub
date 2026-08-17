console.log('Hello from app.js! Your JavaScript is connected and running!');

const totalDisplayElement = document.getElementById('total-display');
const addItemButton = document.getElementById('add-item-btn');
const itemPrice = 15;

let totalCost = 0;

const handleButtonClick = function() {
    totalCost += 1;
    let message = 'Hello, you have been charged ${totalCost}.';
    if(totalCost >= 5) {
        message += ' Wow, you are a super buyer!';
        totalDisplayElement.style.color = 'purple';
    } else {
        totalDisplayElement.style.color = '#333';
    }
    totalDisplayElement.textContent = message;
    console.log('Button Clicked! Current total cost: ${totalCost}');
};

handleButtonClick();

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed, App is ready for interaction')
    addItemButton.addEventListener('click', handleButtonClick);
    totalDisplayElement.textContent = 'Welcome, click the button below to start buying';
});