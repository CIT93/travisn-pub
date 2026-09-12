const TSHIRT_ORDERS_DATA = "tshirt_orders_data";

export const saveOrders = function(orders) {
    try {
    localStorage.setItem(TSHIRT_ORDERS_DATA, JSON.stringify(orders));
    console.log("Data saved to local storage successfully"); 
    } catch (error) {
        console.error(`Error saving data to local storage: ${error}`);
    }
};

// Generates a simple, unique ID for a new entry based on the current timestamp.
// This function is now part of the storage module as it's related to data management.
// @returns {string} A unique ID string.

export const generateUniqueId = function() {
    return Date.now().toString();
};

export const loadOrders = function() {
     const dataString = localStorage.getItem(TSHIRT_ORDERS_DATA);
    try { 
        if (dataString) {
            return JSON.parse(dataString); 
        }
    } catch (error) {
        console.error(`Error loading entries from local storage: ${error}`);
        localStorage.removeItem(TSHIRT_ORDERS_DATA);
    }
    return []; 
};