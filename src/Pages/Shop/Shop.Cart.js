import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiArrowNarrowRight } from 'react-icons/hi';

const ShopCart = (props) => {
    const { cart } = props;

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
            <Link to='/delete' className="btn btn-block btn-error mt-5 text-white">Clear Cart<RiDeleteBinLine size={30} className='ml-2' /></Link>
            <Link to='/order' className="btn btn-block btn-success mt-5 text-white">
                {props.children}
                <HiArrowNarrowRight size={30} className='ml-2' />
            </Link>
        </div>
    );
};

export default ShopCart;