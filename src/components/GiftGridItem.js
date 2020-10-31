import React from 'react'

function GiftGridItem( { title, url } ) {
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

export default GiftGridItem
