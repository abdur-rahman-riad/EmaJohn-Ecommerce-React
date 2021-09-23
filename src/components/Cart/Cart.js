import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalPrice = 0;
    for (const product of cart) {
        total = total + product.price;
        totalPrice = total.toFixed(2);
    }
    return (
        <div>
            <div className="cart-item">
                <p>Items Price: </p>
                <p>${totalPrice}</p>
            </div>

            <div className="cart-item">
                <p>Shipping: </p>
                <p>${totalPrice}</p>
            </div>

            <div className="cart-item">
                <p>Sub-Total: </p>
                <p>${totalPrice}</p>
            </div>

            <div className="cart-item">
                <p>Tax: </p>
                <p>${totalPrice}</p>
            </div>

            <hr />

            <div className="cart-item">
                <h4>Total: </h4>
                <h4>${totalPrice}</h4>
            </div>
            <button className="place-order">Place Order</button>
        </div>
    );
};

export default Cart;