import React from 'react';
import useCart from '../../Hooks/useCart';
import ShopCart from '../Shop/Shop.Cart';
import useProducts from '../../Hooks/useProducts';

import ReviewItem from './ReviewItem';
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left p-10 card shadow-2xl">
                    <ShopCart cart={cart} />
                </div>
                <div className="card flex-shrink-0 w-full h-full max-w-md shadow-xl bg-base-10">
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