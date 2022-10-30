import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const Products = ({ product, addProducts }) => {
    const { name, img, seller, price, ratings } = product;

    return (
        <div className="card w-96 glass">
            <figure><img className=' p-2 rounded-xl' src={img} alt="car!" /></figure>
            <div className="card-body py-0 px-3 mb-2">
                <h2 className="text-xl">{name}</h2>
                <p>price: ৳ {price}</p>
                {/* <div className='flex'> */}
                <small>Manufacturer : {seller}</small>
                <small>rating : {ratings} star</small>
                {/* </div> */}
            </div>
            <div className="">
                <button onClick={() => addProducts(product)} className="btn btn-block btn-warning">Add to cart<MdShoppingCart className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Products;