import React from 'react';
import { Link } from 'react-router-dom';
import { CiMoneyCheck1 } from 'react-icons/ci';

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
            <h3 className='text-2xl text-center font-bold p-5 mb-4'>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p className='mt-5 mb-5'>Total Price: ৳ {total}</p>
            <p>Total Shipping: ৳ {shipping}</p>
            <p className='mt-5 mb-5'>Tax:৳ {tax}</p>
            <p className='font-bold'>Grand Total: ৳{grandTotal}</p>
            <Link to='/delete' className="btn btn-block btn-error mt-5">Clear Cart<CiMoneyCheck1 size={30} className='ml-2' /></Link>
            <Link to='/order' className="btn btn-block btn-success mt-5">Proceed Checkout<CiMoneyCheck1 size={30} className='ml-2' /></Link>
        </div>
    );
};

export default ShopCart;