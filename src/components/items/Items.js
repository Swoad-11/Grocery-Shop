import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Items.css'

const Items = (props) => {
        const {item,handleClick} = props;
        const {id, name, price, image} = item;
    

        return (
            <div className='items'>
            <div className='item'>
            <img src={image} alt="" />
            <div className='text'>
            <strong>Name: {name}</strong>
            <p>Price: {price}</p>
            <p>Item-ID: {id}</p>
            </div>
            </div>
            <button onClick={() => handleClick(item)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
        );
};

export default Items;