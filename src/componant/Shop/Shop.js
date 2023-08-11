import React, { useEffect, useState } from 'react';
import './shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    // console.log(products)
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    useEffect( () => {
        if(products.length){
            const savedProducts = getShoppingCart();
            let storedProduct = [];
            for(const id in savedProducts){
                const matchedProducts = products.filter(product => product.id === id);
                const quantity = savedProducts[id];
                matchedProducts[0].quantity = quantity;
                storedProduct.push(matchedProducts[0]);
            }
            setCart(storedProduct);
        }
    }, [products])

    return (

        <>
            <div className="search-product">
                <input type="text" placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Products 
                            key = {product.id}
                            product = {product}
                            handleAddToCart = {handleAddToCart}
                        ></Products>)
                    }
                </div>
                {/* Shopping cart */}
                <div className="cart-container">
                    <Cart cart = {cart}></Cart>

                </div>

            </div>

        </>
    );
};

export default Shop;