import React from 'react';
import './products.css';

const Products = (props) => {
    const {name, id, img, price, stock} = props.product;
    return (
        <div className='products-container'>
            <div className="product">
                <img src= {img} alt={name} />
            </div>
            <div className="product-details">
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <button className='addToCart'>Add To Cart</button>

            </div>
        </div>
    );
};

export default Products;