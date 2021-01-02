import React from 'react'

function NomineeCards({key, title, year, poster, removeButton, nominee}) {
    return (
        <div className="card">
            <img className="card__image" src={poster} alt={`${title} movie-poster`}/>
            <div className="card__items">
                <h2 className="card__items-title">{title}</h2>
                <p className="card__items-year">{year}</p>
                <button className="card__items-button" onClick={removeButton(nominee)}>Remove</button>
            </div>
        </div>


    )
}

export default NomineeCards
