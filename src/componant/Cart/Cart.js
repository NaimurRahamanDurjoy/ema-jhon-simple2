import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(props);
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <h4>Order Items: {cart.length}</h4>
            <div className="order-details">
                
            </div>
            
        </div>
    );
};

export default Cart;