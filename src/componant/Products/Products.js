import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './products.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    const {name, id, img, price, stock} = props.product;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    
    // console.log(total);
    return (
        <div className='products-container'>
            <div className="product">
                <img src= {img} alt={name} />
            </div>
            <div className="product-details">
                <h3 className='product-name'>{name}</h3>
                <h4>Total: {props.product.length}</h4>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left is stock - order soon</small></p>
                <button className='addToCart' onClick={() => props.handleAddToCart(props.product)}>{shoppingCart} Add To Cart</button>
            

            </div>
        </div>
    );
};

export default Products;