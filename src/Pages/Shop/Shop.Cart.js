import React from 'react';

const ShopCart = ({cart}) => {
    return (
        <div>
            <h3>Order summary</h3>
                <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default ShopCart;