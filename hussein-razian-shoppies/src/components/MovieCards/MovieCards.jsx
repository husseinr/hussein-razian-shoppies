import React, {useState, useEffect} from 'react';

function MovieCards({title, poster, year, nominateMovies, nominees, id}) {

    let nomineeList = nominees.map(nominee => nominee.id);

    const nominateMovie = (e) => {
        const nominated = {
            title: title,
            year: year,
            id: id,
        }
        nominateMovies(nominated)
    }

    let nominateButton;
    if(nomineeList.includes(id)) {
        nominateButton = <button disabled onClick={(e) => nominateMovie(e)}>Nominate</button>
    }
    else {
        nominateButton = <button onClick={(e) => nominateMovie(e)}>Nominate</button>
    }

    return (
        <div>
            <p>{title}</p>
            <p>{year}</p>
            <img src={poster}/>
            {nominateButton}
        </div>
    )
}

export default MovieCards
