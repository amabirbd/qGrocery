import { faCaretDown, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Location = () => {
    let location = "Khilkhet"
    return (
        <div className="location">
             <FontAwesomeIcon icon={faMapPin} color="#FF4E00" size="lg" />
             <p className="location-name">{location}</p>
            <FontAwesomeIcon icon={faCaretDown} color="grey"/>
        </div>
    )
}

export default Location
