import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // let totalItemsPrice = 0;
    // for(const product of cart){
    //     totalItemsPrice = totalItemsPrice + product.price;    
    // }
    const totalItemsPrice = cart.reduce((previous, product) => previous + product.price, 0);
    
    const shipping = (totalItemsPrice * 5) / 100;
    const tax = (totalItemsPrice * 200) / 100;
    const totalPrice = totalItemsPrice + shipping + tax;
    // console.log(props);
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <h4>Order Items: {cart.length}</h4>
            <div className="order-details">
                <p>Items: ${totalItemsPrice.toFixed(2)}</p>
                <p>Shipping & Handling: ${shipping.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
            <button className="review-order">Review Order</button>
            
        </div>
    );
};

export default Cart;