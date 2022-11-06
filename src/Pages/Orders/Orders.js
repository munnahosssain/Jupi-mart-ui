import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>Orders :{products.length}</h1>
            <p>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders; 