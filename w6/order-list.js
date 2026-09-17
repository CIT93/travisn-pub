const OrderListBody = document.getElementById('order-table-body');

// --- Helper Functions for Data Formatting (Private to this module) ---
//
// Formats a timestamp into a local date string.
// @param {string} timestamp - ISO string timestamp.
// @returns {string} Formatted date string.
const formatDate = function(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        year: 'numeric', month: 'short', day: 'numeric'
    });
};

// const formatHomeSizeDisplay = function(homeSquareFootage, isApartment) {
//     if (isApartment) {
//         return 'Apt.';
//     } else {
//         return `${homeSquareFootage.toFixed(0)} sqft`;
//     }
// };

// Helper to format radio button values for table display (e.g., 'meatHeavy' -> 'Meat-heavy').
// @param {string} size - The raw size value from a radio button.
// @returns {string} The formatted display string.
const formatOrderSize = function(size) {
    switch (size) {
        case 'small': return 'Small';
        case 'medium': return 'Medium';
        case 'large': return 'Large';
        default: return size;
    }
};

// Creates and returns a single table row () element for a given entry.
// This function encapsulates the logic for building each row's HTML.
// @param {Object} entry - The carbon footprint entry object to display.
// @returns {HTMLElement} The created DOM element.
const createTableRow = function(entry) {
    const row = document.createElement('tr');
    // This is super useful for JavaScript to quickly find a row later for editing or deleting.
    // Store the entry's unique ID directly on the row using a data-id attribute.
    row.dataset.id = entry.id;
    // Set the inner HTML of the row using a template literal.
    row.innerHTML = `
        <td>${formatDate(entry.timestamp)}</td>
        <td>${entry.qty}</td>
        <td>${formatOrderSize(entry.size)}</td>
        <td>${entry.totalPrice}</td>
        <td class="action-cell">
            <button class="action-button edit" data-id="${entry.id}">Edit</button>
            <button class="action-button delete" data-id="${entry.id}">Delete</button>
        </td>
    `;
    return row;
};

// Main function to render the table with the given carbon footprint entries.
// @param {Array} entries - An array of carbon footprint entry objects to display.
export const renderOrders = function(orders) {
    // Clear any existing rows in the table body to avoid duplicates on re-render.
    OrderListBody.innerHTML = '';
    console.log('inside renderOrders')
    // If there are no entries, hide the table and show the "no entries" message.
    // if (orders.length === 0) {
    //     OrderListBody.style.display = 'none';
    //     noEntriesMessage.style.display = 'block';
    //     clearAllDataButton.style.display = 'none'; 
    //     console.log('no entries to Order List hidden');
    //     return;
    // } else {
    //     OrderListBody.style.display = 'table';
    //     noEntriesMessage.style.display = 'none';
    //     clearAllDataButton.style.display = 'block';
    // }

    // Sort entries by timestamp (most recent first) before rendering.
    // We use a spread operator [...] to create a shallow copy so we don't modify the original array order.
    // Sorts the array in descending order (newest first)
    const sortedOrders = [...orders].sort(function(a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    // Loop through each sorted entry and create a table row for it.
    // Using for...of loop for easy iteration
    for (const entry of sortedOrders) {
        console.log(`${entry}`)
        // Call our helper function to build the row
        const rowElement = createTableRow(entry);
        OrderListBody.appendChild(rowElement);
    }
};