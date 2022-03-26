import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let cartItem = cart.map( item =>
        <div className='selected-items'>
            <img src={item.image} alt="" />
        <p>{item.name}</p>
        <button className='btn-3'>
            <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon>
        </button>
        </div>
        )
        

    return (
        <div className='cart'>
                {cartItem}
            </div>

    );
};

export default Cart;