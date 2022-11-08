import React from 'react';
import useCart from '../../Hooks/useCart';
import ShopCart from '../Shop/Shop.Cart';
import useProducts from '../../Hooks/useProducts';

import ReviewItem from './ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left p-10 card shadow-xl">
                    <ShopCart cart={cart} >
                        <Link to='checkout'>Proceed Checkout</Link>
                    </ShopCart>
                </div>
                <div className="card flex-shrink-0 w-full h-full max-w-md shadow-xl p-5 bg-base-10">
                    {
                        cart.map(product =>
                            <ReviewItem
                                key={product.id}
                                product={product}
                                handleRemoveProduct={handleRemoveProduct}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders; 