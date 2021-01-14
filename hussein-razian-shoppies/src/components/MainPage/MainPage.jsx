import React, {useState, useEffect} from 'react';
import {Link, Switch} from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import MovieCards from '../MovieCards/MovieCards';
import NomineeCards from '../NomineeCards/NomineeCards';
import FinalNomineePage from '../FinalNomineePage/FinalNomineePage';
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
    
    const [nomConfirmation, setNomConfirmation] = useState(true);
    let finalRedierct = () => {
        setNomConfirmation(!nomConfirmation)
    }

    // let nomineeAlert;
    // if(nominees.length === 5) { 
    //     nomineeAlert = 
    //     <div>
    //         <h2>You have 5 Nominations!</h2>
    //         <button onClick={setNomConfirmation(!nomConfirmation)}>Click here to Confirm Nominations</button>
    //     </div>
    // }

    useEffect(() => {
        getMovies();
    }, [movieSearch]);
    
let nomineesLength;
if(nominees.length < 5) {
    nomineesLength = true
}
else {
    nomineesLength = false
};

let FinalPage = () => {
    return (
    <div>
        <FinalNomineePage nominees={nominees}/>
    </div>
    )
};

let nomLength;

if (nominees.length === 5) {
   nomLength =
   <div>
        <h2>You Now have 5 Nominations</h2>
        <button onClick={finalRedierct}>Click here to Submit</button>
    </div>
}

    return (
      nomConfirmation  ? 
        <div className="curtain">
        <div className="curtain__wrapper">
            {/* <input type="checkbox"/> */}
            <div className="curtain__panel curtain__panel--left"/>
            <div className="curtain__content">
            <main className="main-page">
            {nomLength}
                <PageHeader/>
                <div className="main-page__content">
                    <input className="main-page__content-search" placeholder="Search a Movie" name="movie" autocomplete="off" onChange={(e) => searchingMovie(e.target.value)}/>
                    <div className="main-page__content-sections">
                        <section className="main-page__content-results">

                            {movies && movies.map((movie) => {

                            return (
                                <MovieCards
                                key={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                id={movie.imdbID}
                                nominateMovies={selectNominees}
                                nominees={nominees}
                                />
                            )
                            })}
                        </section>

                        <section className="main-page__content-nominees">
                        {nominees.length && <h1 className="main-page__content-title">Nominees</h1>}

                            {nominees && nominees.map((nominee, index) => {
                                return (
                                    <NomineeCards
                                    key={nominee.id}
                                    src={nominee.poster}
                                    title={nominee.title}
                                    year={nominee.year}
                                    remove={removeNominee}
                                    nominee={nominee}
                                    index={index + 1}
                                    />
                                )
                            })}
                        </section>
                    </div>
                </div>
            </main>
            </div>
            <div className="curtain__panel curtain__panel--right"></div>
        </div>
    </div>
    : 
    <FinalPage/>
    )
}

export default MainPage
