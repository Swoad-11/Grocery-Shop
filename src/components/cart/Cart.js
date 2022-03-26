import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faWindowRestore, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart} = props;

    

    return (
        <div className='cart'>
            <h4 className='cartHead'>Selected Items</h4>
            <div className='selected-items'>
                <img src={cart?.item?.image} alt="" />
                <p>{cart?.item?.name}</p>
                <button className='btn-3'>
                <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
            <div className="buttons">
            <button className='btn-1'>
                <p className='btn-text'>Choose For Me</p>
                <FontAwesomeIcon icon={faArrowPointer}></FontAwesomeIcon>
            </button>
            <button  className='btn-2'>
                <p className='btn-text'>Reset</p>
                <FontAwesomeIcon icon={faWindowRestore}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default Cart;