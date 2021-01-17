import React from 'react';
import DefaultPoster from '../../assets/images/movie-poster.jpg';

import './movieCards.scss';

function MovieCards({title, poster, year, nominateMovies, nominees, id}) {

    let nomineeList = nominees.map(nominee => nominee.id);

    const nominateMovie = (e) => {
        const nominated = {
            title: title,
            year: year,
            poster: poster,
            id: id,
        }
        nominateMovies(nominated)
    }

    let nominateButton;
    if(nomineeList.includes(id)) {
        nominateButton = <button className="card__items-button--disabled" disabled onClick={(e) => nominateMovie(e)}>Nominate</button>
    }
    else {
        nominateButton = <button className="card__items-button" onClick={(e) => nominateMovie(e)}>Nominate</button>
    }
    
    let moviePoster;
    if(poster === "N/A") {
        moviePoster = DefaultPoster
    }
    else {
        moviePoster = poster
    }

    return (
        <div className="card">
            <div className="card__image">
                <img className="card__image-file" src={moviePoster} alt={`${title} movie-poster`}/>
            </div>
            <div className="card__items">
                <h2 className="card__items-title">{title}</h2>
                <p className="card__items-year">{year}</p>
                {nominateButton}
            </div>
        </div>
    )
}

export default MovieCards
