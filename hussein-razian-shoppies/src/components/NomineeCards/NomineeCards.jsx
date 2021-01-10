import React from 'react';
import './nomineeCards.scss';


function NomineeCards({key, src, year, title, remove, nominee, index}) {
    return (
        <div className="nom-card" key={key}>
            <div className="nom-card__value">
                <h2 className="nom-card__value-index">{index}</h2>
            </div>
            <div className="nom-card__content">
                <img className="nom-card__content-image" src={src}/>
                <div className="nom-card__content-items">
                    <h3 className="nom-card__content-items-title"> {title} </h3>
                    <button className="nom-card__content-items-button" onClick={() => remove(nominee)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default NomineeCards
