import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Searchbox() {
    return (
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" class="searchButton">
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div> 
    )
}

export default Searchbox
