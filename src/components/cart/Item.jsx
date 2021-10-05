import React from 'react'
import './cart.css';

const Item = ({item}) => {
    console.log(item)
    return (
        <>
        <div className="cart-item">
            <img className="cart-img" src={item.img} alt={item.name} />
            <div className="name-price">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price-one">$ {item.price} / {item.quantity} gm</p>
            </div>
            

            <div className="price-prevPrice">
                <p className="cart-item-price-two">$ {item.price}</p>
                <p className="cart-item-prevPrice">$ {item.prevPrice}</p>
            </div>
            <div className="cart-icon">{item.deleteIcon}</div>
            
        </div>
        <div className="cart-item-divider">

        </div>

        
        </>
    )
}

export default Item
