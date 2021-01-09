import React, {useState, useEffect} from 'react';
import PageHeader from '../PageHeader/PageHeader';
import MovieCards from '../MovieCards/MovieCards';
// import PopUpModal from '../PopUpModal/PopUpModal';
import axios from 'axios';
import './mainPage.scss';



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

    const removeNominee = (movie) => {
        let updatedNomineeList = nominees.filter( nominee => {
            return nominee.id !== movie.id
        })
        setNominees(updatedNomineeList);
        console.log(updatedNomineeList)
    };

    let nomineeAlert;
    if(nominees.length === 5) { 
        nomineeAlert = 
        <div className="modal">
            <div className="modal__content">
                <p className="modal__content-message">Thanks for your Nominations!</p>
            </div>

        </div>
    }

    useEffect(() => {
        getMovies();
    }, [movieSearch]);
    

    return (
      
        <div className="curtain">
              {nomineeAlert}
            <div className="curtain__wrapper">
                {/* <input type="checkbox"/> */}
                <div className="curtain__panel curtain__panel--left"/>
                <div className="curtain__content">
                <main className="main-page">
                    <PageHeader/>
                    <div className="main-page__content">
                        <input className="main-page__content-search" placeholder="Search a Movie" name="movie" autocomplete="off" onChange={(e) => searchingMovie(e.target.value)}/>

                        <section className="main-page__content-results">

                            {movies && movies.map(movie => {

                            return (
                                <MovieCards
                                key={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                id={movie.imdbID}
                                nominateMovies={selectNominees}
                                nominees={nominees}/>
                            )
                            })}
                        </section>
                        {nominees.length && <h1 className="main-page__content-title">Nominees</h1>}
                        <section className="main-page__content-nominees">
                                {nominees && nominees.map(nominee => {
                                return (
                                    
                                <div className="card" key={nominee.id}>
                                    <img className="card__image" src={nominee.poster}/>
                                    <div className="card__items">
                                        <h2 className="card__items-title">{nominee.title}</h2>
                                        <p className="card__items-year">{nominee.year}</p>
                                        <button className="card__items-button" onClick={() => removeNominee(nominee)}>Remove </button> 
                                    </div>
                                </div>)
                                    }
                                )
                            }
                        </section>
                    </div>
                </main>

                </div>
                <div className="curtain__panel curtain__panel--right"></div>


            </div>

        </div>
    )
}

export default MainPage
