import React from 'react';
import DefaultPoster from '../../assets/images/movie-poster.jpg';
import './nomineeCards.scss';


function NomineeCards({key, src, title, remove, nominee, index}) {

    let moviePoster;
    if(src === "N/A") {
        moviePoster = DefaultPoster
    }
    else {
        moviePoster = src
    }
    
    return (
        <div className="nom-card" key={key}>
            <div className="nom-card__value">
                <h2 className="nom-card__value-index">{index}</h2>
            </div>
            <div className="nom-card__content">
                <img className="nom-card__content-image" src={moviePoster}/>
                <div className="nom-card__content-items">
                    <h3 className="nom-card__content-items-title"> {title} </h3>
                    <button className="nom-card__content-items-button" onClick={() => remove(nominee)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default NomineeCards
