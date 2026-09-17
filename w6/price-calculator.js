const shirtPrice = 15;
const giftWrapPrice = 2;

export const calculateTotal = function (orderData) {
    const shirtQty = orderData.qty;
    const giftWrap = orderData.giftWrap;
    let totalPrice = shirtPrice * shirtQty;
    if (giftWrap) {
        totalPrice += giftWrapPrice;
    };
    return { totalPrice };
};
