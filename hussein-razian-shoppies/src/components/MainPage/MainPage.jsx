import React, {useState, useEffect} from 'react';
import MovieCards from '../MovieCards/MovieCards';
import axios from 'axios';



let MainPage = () => {

    const [movies, setMovies] = useState([]);
    const [movieSearch, setMovieSearch] = useState('');
    const [nominees, setNominees] = useState([]);
  
    let API_URL = `http://www.omdbapi.com/?s=${movieSearch && movieSearch}&apikey=26250842`;

    const getMovies = async () => {
        axios
        .get(API_URL)
        .then(res => {
            if(res.data.Search) {
                setMovies(res.data.Search);
            }
        })
        .catch(err => {
            console.log(err)
        })
    };

    const searchingMovie = (e) => {
        setMovieSearch(e)
    };

    const selectNominees = (movie) => {
        let updatedNomineeList = [...nominees, movie];
        if(nominees.length < 5)setNominees(updatedNomineeList);
    };

    // update below



    const removeNominee = (movie) => {
        let updatedNomineeList = nominees.filter( nominee => {
            return nominee.id !== movie.id
        })
        setNominees(updatedNomineeList);
        console.log(updatedNomineeList)
    };

    useEffect(() => {
        getMovies();
    }, [movieSearch]);

    return (
        <div>
            <input name="movie" onChange={(e) => searchingMovie(e.target.value)}/>

            
            {movies && movies.map(movie => {

            return (
            
            <div >
                <MovieCards
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                id={movie.imdbID}
                nominateMovies={selectNominees}
                nominees={nominees}/>
                {/* <button  onClick={() => selectNominees(movie)}>Add Nominee</button> */}
                {/* {nominees && nominees.find(nominee => {
                    if(movie.imdbID !== nominee.imdbID) {
                        <button onClick={() => selectNominees(movie)}>Add Nominee</button>
                        console.log('hi')
                    }
                    else {
                        <button disabled onClick={() => selectNominees(movie)}>Add Nominee</button>
                        console.log('no')
                    }
                })
                } */}
                {/* <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={`${movie.Title} poster`}/> */}
            </div>)
            })}
        <h1>Nominees</h1>
            {nominees && nominees.map(nominee => {
            return (
            <div key={nominee.id}>
                <p>{nominee.title}</p>
                <p>{nominee.year}</p>
                <button onClick={() => removeNominee(nominee)}>Remove </button> 
            </div>)
        })}

        </div>
    )
}

export default MainPage
