import { faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Buttons() {
    return (
        <div className="btns">
            <div>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{padding:'0px 10px'}} />
                <p>My Orders</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faUserAlt} size="lg" style={{padding:'0px 10px'}} />
                <p>Account</p>
            </div>
        </div>
    )
}

export default Buttons;