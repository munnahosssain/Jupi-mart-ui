import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const ReviewItem = ({ handleRemoveProduct, product }) => {
    const { name, img, price, quantity } = product;
    return (
        <div className="alert alert-success shadow-lg mt-2">
            <img className='h-12 rounded-md' src={img} alt="product" />
            <div className='flex flex-wrap text-start'>
                <h3 title={name}>{name.length > 18 ? name.slice(0, 15) + '...' : name}</h3>
                <div className='flex'>
                    <p>Price: ৳{price}</p>
                    <p className='ml-5'>Quantity: {quantity}</p>
                </div>
            </div>
            <div className="avatar placeholder">
                <div style={{ cursor: 'pointer' }} className="bg-error rounded-full w-12">
                    <span className="text-xl"><RiDeleteBinLine onClick={() => handleRemoveProduct(product)} color="white" size={30} /></span>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;