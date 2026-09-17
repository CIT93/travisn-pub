// This module handles displaying and hiding the calculated carbon footprint results on the page.

// Get references to the HTML elements where we will display the results.

const orderSummaryContainer = document.getElementById('order-summary');

// Now, we use resultsContainer.querySelector() to get elements inside the resultsContainer.

const totalDisplay = orderSummaryContainer.querySelector('#display-total');
const qtyDisplay = orderSummaryContainer.querySelector('#display-qty');
const sizeDisplay = orderSummaryContainer.querySelector('#display-size');
const giftDisplay = orderSummaryContainer.querySelector('#display-gift');

// Displays the calculated carbon footprint results in the results section.
// @param {Object} results - An object containing the calculated footprint values (points).
// Update the text content of each display element with the calculated points

export const displayResults = function(results) {
    // console.log ('inside the displayResults function');
    totalDisplay.textContent = results.totalPrice;
    qtyDisplay.textContent = results.qty;
    sizeDisplay.textContent = formatOrderSize(results.size);
    if (results.giftWrap) {
        giftDisplay.textContent = 'Yes';
    } else {
        giftDisplay.textContent = 'No';
    }
    // Make the entire results section visible
    orderSummaryContainer.style.display = 'block';
};

// Hides the entire results section.
export const hideResults = function () {
    orderSummaryContainer.style.display = 'none';
};