import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faWindowRestore} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Items from '../items/Items';
import './Shop.css'

const Shop = () => {
    const [items,setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect (  ()=>{
        fetch('groceryDB.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    const handleClick = (item) => {
        let newCart = [];
        if(cart.length<=3){
            const exists = cart.find(product => product.id === item.id);
            if(!exists){
                newCart = [...cart, item];
            }
            else{
                const rest = cart.filter(product => product.id !== item.id);
                newCart = [...rest, exists];
            }
            setCart(newCart);
        }
    }

    const resetClick = () => {
        const newCart = [];
        setCart(newCart);
    }

    const randomChoiceClick = (item) => {
        let randomChoice = [];
        if(cart.length<=3){
        randomChoice = [...cart,item];
        setCart(randomChoice);
        }
    }



    return (
        <div className='shop-container'>
            <div className="item-container">
                {
                    items.map(item=>
                    <Items key={item.id}
                    item={item}
                    handleClick={handleClick}>
                    </Items>)
                }
            </div>
            <div className='cart-container'>
            <h4 className='cartHead'>Selected Items</h4>
            <Cart cart={cart}></Cart>
            <div className="buttons">
            <button onClick={() => randomChoiceClick(cart)} className='btn-1'>
                <p className='btn-text'>Choose For Me</p>
                <FontAwesomeIcon icon={faArrowPointer}></FontAwesomeIcon>
            </button>
            <button onClick={() => resetClick(cart)}  className='btn-2'>
                <p className='btn-text'>Reset</p>
                <FontAwesomeIcon icon={faWindowRestore}></FontAwesomeIcon>
            </button>
            </div>
            </div>
        </div>
    );
};

export default Shop;