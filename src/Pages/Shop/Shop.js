import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Products from '../Products/Products.products/Products';
import ShopCart from './Shop.Cart';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const addProducts = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    return (
        <div className='card-container sticky top' style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
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
                <ShopCart cart={cart} >
                    <Link to='/order'>Review Order</Link>
                </ShopCart>
            </div>
        </div>
    );
};

export default Shop;