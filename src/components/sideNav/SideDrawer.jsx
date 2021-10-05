import { faAppleAlt, faBars, faCarBattery, faCarrot, faChevronRight, faDrumstickBite, faGift, faHeartbeat, faTabletAlt, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './sidenav.css'

function SideDrawer() {
    // let items = ['Food and Drinks', 'Vegetables', 'Fish and Meat', 'Beauty and Health', 'Fruits', 'Gift Box', 'Accessories', 'Home Appliances', 'Food and Drink', 'Vegetables', 'Fish and Meats', 'Beauty and Heakth'];
    let rightArrow = <FontAwesomeIcon icon={faChevronRight} size="xs" style={{padding: '0px 0px 0px 50px'}} />
    return (
        <>
        
        <ul className="sidenav-menus">

        <div className="menu-bar">
            <FontAwesomeIcon icon={faBars} color="#FF4E00" size="2x" />
            <img src='/qgrocery.PNG' alt="logo" className="logo" />
        </div>
            
            <li key="food-and-drink" style={{padding:'5px 5px', color: '#FF4E00'}}><FontAwesomeIcon icon={faUtensils} style={{padding:'0px 10px'}} colo="#FF4E00"  size="2x" /> Food and Drinks {rightArrow}</li>
            <li key="Vegetables" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faCarrot} style={{padding:'0px 10px'}}  size="2x" />Vegetables {rightArrow}</li>
            <li key="Fish and Meat" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faDrumstickBite} style={{padding:'0px 10px'}} size="2x" />Fish and Meat {rightArrow}</li>
            <li key="Beauty and Health" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faHeartbeat} style={{padding:'0px 10px'}} size="2x" />Beauty and Health {rightArrow}</li>
            <li key="Fruits" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faAppleAlt} style={{padding:'0px 10px'}}  size="2x"/>Fruits {rightArrow}</li>
            <li key="Gift Box" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faGift} style={{padding:'0px 10px'}}  size="2x"/>Gift Box {rightArrow}</li>
            <li key="Accessories" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faTabletAlt} style={{padding:'0px 10px'}} size="2x" />Accessories {rightArrow}</li>
            <li key="Home Appliances" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faCarBattery} style={{padding:'0px 10px'}} size="2x" />Home Appliances {rightArrow}</li>
            <li key="food-and-drink" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faUtensils} style={{padding:'0px 10px'}}  size="2x"/> Food and Drinks {rightArrow}</li>
            <li key="Vegetables" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faCarrot} style={{padding:'0px 10px'}} size="2x" />Vegetables {rightArrow}</li>
            <li key="Fish and Meat" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faDrumstickBite} style={{padding:'0px 10px'}} size="2x" />Fish and Meat {rightArrow}</li>
            <li key="Beauty and Health" style={{padding:'5px 5px'}}><FontAwesomeIcon icon={faHeartbeat} style={{padding:'0px 10px'}} size="2x" />Beauty and Health {rightArrow}</li>

        </ul>
        </>
    )
}

export default SideDrawer
