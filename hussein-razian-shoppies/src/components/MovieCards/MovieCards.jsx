import React, {useState, useEffect} from 'react';

function MovieCards({title, poster, year, nominateMovies, movie, id}) {

    const [isNominated, setIsNominated] = useState(false);

    const nominateMovie = (e) => {
        const nominated = {
            title: title,
            year: year,
            id: id,
            nominated: true
        }
        setIsNominated(true)
        nominateMovies(nominated)
    }
    return (
        <div>
            <p>{title}</p>
            <p>{year}</p>
            <img src={poster}/>
            {isNominated && <button disabled onClick={(e) => nominateMovie(e)}>Nominate</button>}
            {!isNominated && <button  onClick={(e) => nominateMovie(e)}>Nominate</button>}
            
        </div>
    )
}

export default MovieCards
