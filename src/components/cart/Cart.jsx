import { faAngleUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './cart.css'
import Item from './Item'

function Cart() {
    let cartItems = [
        
        {
            img: "/mango.jpg",
            name: "Mango(Himshagor)",
            price: 78,
            quantity: 500,
            prevPrice: 98,
            deleteIcon: <FontAwesomeIcon icon={faTrashAlt} />
        },
        {
            img: "/mango.jpg",
            name: "Mango(Himshagor)",
            price: 78,
            quantity: 500,
            prevPrice: 98,
            deleteIcon: <FontAwesomeIcon icon={faTrashAlt} />
        },
        {
            img: "/mango.jpg",
            name: "Mango(Himshagor)",
            price: 78,
            quantity: 500,
            prevPrice: 98,
            deleteIcon: <FontAwesomeIcon icon={faTrashAlt} />
        },
        {
            img: "/mango.jpg",
            name: "Mango(Himshagor)",
            price: 78,
            quantity: 500,
            prevPrice: 98,
            deleteIcon: <FontAwesomeIcon icon={faTrashAlt} />
        },
        {
            img: "/mango.jpg",
            name: "Mango(Himshagor)",
            price: 78,
            quantity: 500,
            prevPrice: 98,
            deleteIcon: <FontAwesomeIcon icon={faTrashAlt} />
        },
        {
            img: "/mango.jpg",
            name: "Mango(Himshagor)",
            price: 78,
            quantity: 500,
            prevPrice: 98,
            deleteIcon: <FontAwesomeIcon icon={faTrashAlt} />
        },
    ]
    return (
        <div className="cart-section">
            <div className="cart">
                <h4 className="cart-header">My Cart <span>(6 items)</span></h4>
                {
                    cartItems.map((item) => (
                        <li key={item.name}>
                            <Item item={item} />
                        </li>
                    ))
                }
                <div className="bottom-section">
                    <div className="offer-code">
                        <div className="offer-icon">
                            <FontAwesomeIcon icon={faAngleUp} />
                            <p>Any Offer Code ?</p>
                        </div>
                    </div>
                </div>

                <div className="total">
                        Total $ 1,240
                    </div>
                
            </div>

            
            
        </div>
    )
}

export default Cart
