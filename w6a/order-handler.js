
const orderForm = document.getElementById('order-form');
const qtyInput = orderForm.querySelector('#qty');
const giftWrapInput = orderForm.querySelector('#gift-wrap');
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');

const getSelectedRadioValue = function (radioButtons) {
    let selectSizeType = null;
    for (const radio of radioButtons) {
        if (radio.checked) {
            console.log(`${radio.value} has the attribute of ${radio.checked}`);
            return radio.value;
        };
    };
};

export const getOrderInputs = function () {
    return {
        //key: values, 
        qty: parseInt(qtyInput.value) || 1,
        giftWrap: giftWrapInput.checked,
        size: getSelectedRadioValue(sizeRadios),
    };
};