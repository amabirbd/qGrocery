import React from 'react'

function Menus() {
    let menus = ['HOME', 'PRODUCTS', 'STORES', 'CONTACT US', 'TRACK ORDER']
    return (
        <div className="menus">
            {
                menus.map(menu => (
                    <li key={menu}><a href="/">{menu}</a></li>
                ))
            }

        </div>
        
    )
}

export default Menus
