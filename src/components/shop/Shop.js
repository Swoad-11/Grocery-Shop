import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Items from '../items/Items';
import './Shop.css'

const Shop = () => {
    const [items,setItems] = useState([]);
    const [cart, setCart] = useState({});

    useEffect (  ()=>{
        fetch('groceryDB.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    } )

    const handleClick = (item) => {
        console.log(item);
        const newCart = {...cart, item};
        setCart(newCart);
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
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;