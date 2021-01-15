import React, {useState, useEffect} from 'react';
import {Link, Switch} from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import MovieCards from '../MovieCards/MovieCards';
import NomineeCards from '../NomineeCards/NomineeCards';
import FinalNomineePage from '../FinalNomineePage/FinalNomineePage';
import axios from 'axios';
import './mainPage.scss';



let MainPage = () => {

    const [movies, setMovies] = useState([]);
    const [movieSearch, setMovieSearch] = useState('');
    const [nominees, setNominees] = useState([]);
    const [nomConfirmation, setNomConfirmation] = useState(true);
  
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
    

    let finalRedierct = () => {
        setNomConfirmation(!nomConfirmation)
    }

    useEffect(() => {
        getMovies();
    }, [movieSearch]);


let FinalPage = () => {
    return (
    <div>
        <FinalNomineePage nominees={nominees}/>
    </div>
    )
};

let nomConfirm;
if (nominees.length === 5) {
   nomConfirm =
   <div className="confirm-nom">
        <h2 className="confirm-nom__header">You Now have 5 Nominations</h2>
        <button className="confirm-nom__button" onClick={finalRedierct}>Click here to Submit</button>
    </div>
}

return (
    nomConfirmation  ? 
    <>
        <PageHeader/>
        <main className="main-page">
            <div className="main-page__content">
                <h2 className="main-page__content-heading">Search for a Movie Below and Select your Nominees!</h2>
                <input className="main-page__content-search" placeholder="Search a Movie" name="movie" autocomplete="off" onChange={(e) => searchingMovie(e.target.value)}/>
                {nomConfirm}
                <section className="main-page__content-items">
                    <div className="main-page__content-items-results">
                        <h2 className="main-page__content-items-results-header">Search Results</h2>
                        <div className="main-page__content-items-results-cards">
                            {movies && movies.map((movie) => {
                            return <MovieCards
                                    key={movie.imdbID}
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                                    id={movie.imdbID}
                                    nominateMovies={selectNominees}
                                    nominees={nominees}/>
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className="main-page__content-items-nominees">
                        <h2 className="main-page__content-items-nominees-header"> Nominees</h2>
                        <div className="main-page__content-items-nominees-cards">
                            {nominees && nominees.map((nominee, index) => {
                            return  <NomineeCards
                                    key={nominee.id}
                                    src={nominee.poster}
                                    title={nominee.title}
                                    year={nominee.year}
                                    remove={removeNominee}
                                    nominee={nominee}
                                    index={index + 1}/>
                            
                                    }
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </>
: 
<FinalPage/>
)
}

export default MainPage
