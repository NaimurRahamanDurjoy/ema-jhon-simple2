import React, { useEffect, useState } from 'react';
import './shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);
    console.log(products)
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products 
                        key = {product.id}
                        product = {product}
                    ></Products>)
                }
            </div>
            {/* Shopping cart */}
            <div className="cart-container">
                <h3>Order Summary</h3>

            </div>

        </div>
    );
};

export default Shop;