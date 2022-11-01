import React from 'react';

const ShopCart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * .15).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div style={{ position: "sticky", top: 10 }}>
            <h3>Order summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ৳ {total}</p>
            <p>Total Shipping Charge: ৳ {shipping}</p>
            <p>Tax:৳ {tax}</p>
            <p>Grand Total: ৳{grandTotal}</p>
        </div>
    );
};

export default ShopCart;