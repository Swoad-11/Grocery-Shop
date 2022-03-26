import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    const {name, image} = {cart};
    

    return (
        <div className='cart'>
            
            <div className='selected-items'>
                <img src={image} alt="" />
                <p>{name}</p>
                <button className='btn-3'>
                <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;