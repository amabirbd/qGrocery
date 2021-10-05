import React from 'react'
import Location from './Location'
import Menus from './Menus'
import './header-two.css';
import Searchbox from './Searchbox';
import Buttons from './Buttons';

function HeaderTwo() {
    return (
        <div className="header-two">
            <div className="menu-location">
                <Menus />
                <Location />
            </div>
            <div className="search-order-account">
                <Searchbox />
                <Buttons />
            </div>
        </div>
    )
}

export default HeaderTwo
