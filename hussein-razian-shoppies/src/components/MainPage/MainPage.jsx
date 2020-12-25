import React, {useState, useEffect} from 'react';
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
                console.log(res.data.Search);
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
        setNominees(updatedNomineeList);
    }

    useEffect(() => {
        getMovies();
    }, [movieSearch]);



    return (
        <div>
            <input name="movie" onChange={(e) => searchingMovie(e.target.value)}/>
            {movies && movies.map(movie => {
            return <div onClick={() => selectNominees(movie)}> {movie.Title} </div>
        })}
        </div>
    )
}

export default MainPage
