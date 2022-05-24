import { Button } from 'react-bootstrap';
import React from 'react';

const Cart = props => {
    const cart = props.cart;
    const priceTotal = cart.reduce((sum, book) => sum + book.price, 0);
    const tax = priceTotal/10;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Total item ordered: {cart.length}</h5>
            <h5>Total price: $ {priceTotal}</h5>
            <h5>Tax: $ {tax}</h5>
            <h6>Grand total: $ {priceTotal + tax}</h6>
            <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;