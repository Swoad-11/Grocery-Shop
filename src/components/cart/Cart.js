import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faWindowRestore, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {

    
    

    return (
        <div className='cart'>
            <h4 className='cartHead'>Selected Items</h4>
            <div className='selected-items'>
                <img src="https://img.freepik.com/free-photo/fresh-honeycombs_144627-17380.jpg" alt="" />
                <p>Name</p>
                <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon>
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