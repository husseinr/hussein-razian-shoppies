import React, {useState, useEffect} from 'react';
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
    
  
    let API_URL = `https://www.omdbapi.com/?s=${movieSearch && movieSearch}&type="movie"&apikey=26250842`;

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
        setNominees(updatedNomineeList)
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
};


return (
    nomConfirmation  ? 
    <>
        <PageHeader 
        nomConfirm={nomConfirm}
        searchingMovie={searchingMovie}/>
        <main className="main-page">
            <div className="main-page__content">
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
                        <h2 className="main-page__content-items-nominees-header"> Your Nominees</h2>

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
