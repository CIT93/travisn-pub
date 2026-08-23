//--- Part 3: Implement the form-handler.js module ---

// This module handles getting input values from the form and clearing it.
// Simplified: Only focuses on Household Size input for now.

// Main form element that captures the user's carbon footprint data.
const orderForm = document.getElementById('order-form');

// Input field for household members, scoped to the main form.
const qtyInput = orderForm.querySelector('#qty');

// Home Size reference
// const homeSquareFootageInput = carbonFootprintForm.querySelector('#homeSquareFootage');

// Apartment Checkbox reference
const giftWrapInput = orderForm.querySelector('#gift-wrap');

// Food Choices (radio buttons - we need to query for all with the same 'name')
// this returns a node list, which is array "like"
// An Array is a list of items array[index]
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');
// const foodPackagingRadios = carbonFootprintForm.querySelectorAll('input[name="foodPackaging"]');

// @param {NodeList} radioButtons - A NodeList (like an array) of radio button elements.
// @returns {string} The 'value' attribute of the selected radio button.
const getSelectedRadioValue = function (radioButtons) {
    // Loop over the node list to find the radio button checked (clicked)
    // for...of to loop over node list (array like)
    let selectSizeType = null;
    for (const radio of radioButtons) {
        // Code to be executed for each value
        if (radio.checked) {
            console.log(`${radio.value} has the attribute of ${radio.checked}`);
            return radio.value;
        }
    }
}

//--- Part 1: Code clearForm and getFormInput
// Collects all relevant input values from the form for Household Size, Home Size, and Food Choices.
// @returns {Object} An object containing all the collected input values.
export const getOrderInputs = function () {
    console.log('Get Order Inputs');
    // Read the 'value' from number inputs and convert to numbers
    // Read the 'checked' property for checkboxes.

    // Declare a locally scoped valued for square footage
    // const homeSquareFootage = parseInt(homeSquareFootageInput.value) || 0;
    // Declare a locally scoped valued for isApartment
    // const isApartment = isApartmentInput.checked;
    // return houseHoldMember to app.js handleFormSubmit function
    // Refactor return to be an object literal
    // const objLiteral = {
    //     //key: values, 
    //     householdMembers: parseInt(householdMembersInput.value) || 1,
    //     homeSquareFootage: parseInt(homeSquareFootageInput.value) || 0,
    //     isApartment: isApartmentInput.checked
    // };

    // const selectDietType = getSelectedRadioValue(dietTypeRadios);

    return {
        //key: values, 
        qty: parseInt(qtyInput.value) || 1,
        giftWrap: giftWrapInput.checked,
        size: getSelectedRadioValue(sizeRadios),
    };
};

// Clears all input fields in the form and resets default selections.
export const clearForm = function () {
    carbonFootprintForm.reset();
    householdMembersInput.value = 1;
    homeSquareFootageInput.value = 0;
    dietTypeRadios[0].checked;
    foodPackagingRadios[0].checked;
    console.log('Clear Form');
};
// TEMPORARY TEST:
// console.log(getOrderInputs());
