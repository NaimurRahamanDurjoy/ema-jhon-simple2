import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const totalItemsPrice = cart.reduce((previous, product) => previous + product.price, 0);
    let totalQuantity = 0;
    let totalItemsPrice = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        totalItemsPrice = totalItemsPrice + product.price * product.quantity; 
        totalQuantity = totalQuantity + product.quantity;   
    }
    
    
    
    const shipping = (totalItemsPrice * 5) / 100;
    const tax = (totalItemsPrice * 200) / 100;
    const totalPrice = totalItemsPrice + shipping + tax;
    // console.log(props);
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <h4>Order Items: {totalQuantity}</h4>
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