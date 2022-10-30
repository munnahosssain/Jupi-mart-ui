import React, { useEffect, useState } from 'react';
import Products from '../Products/Products.products/Products';
import ShopCart from './Shop.Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addProducts = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='card-container' style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
            <div className="products-container flex grid md:grid-cols-1 lg:grid-cols-3 gap5 gap-y-5 mt-10 mx-24">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addProducts={addProducts}
                    />)
                }
            </div>
            <div className="cart-container bg-slate-200 p-5">
                <ShopCart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;