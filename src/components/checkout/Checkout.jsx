import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './checkout.css'

function Checkout() {
    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div>
                <div className="delivery-address">
                    <div className="delivery-address-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>delivery Address</p>
                    </div>
                    <button className="change-btn">Change</button>

                </div>

                <div className="delivery-address-text">
                    <div>
                        House: 36, Road: 19,
                    </div>
                    <div>
                        floor: F2, Nikunja-2
                    </div>
                </div>
            </div>

            <div>
                <div className="delivery-timing">
                    <div className="delivery-timing-icon">
                        <FontAwesomeIcon icon={faClock} />
                        <p>delivery Address</p>
                    </div>
                    <button className="change-btn">Change</button>

                </div>

                <div className="delivery-time">
                    <div classNam="from">
                        <input type="date" />
                    </div>
                    <div className="to">
                        <input type="date" />
                    </div>
                </div>
                
            </div>

            <div className="checkout-button" >
                <button className="checkout-btn"> Checkout total $ 1,240</button>
            </div>

            <div className="divider">

            </div>

            <div className="messages">
                <div className="messages-one">
                    <span className="star">*</span> $10 Delivery charge included.
                </div>
                <div className="messages-two">
                <span className="star">*</span> By clicking / tapping checkout, I agree to Qgrocery's <span className="terms-of-service">Terms of service</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout
