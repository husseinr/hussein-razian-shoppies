import React from 'react';
import useWindowSize from '../../Hooks/Hooks';
import Confetti from 'react-confetti'
import DefaultPoster from '../../assets/images/movie-poster.jpg';
import "./finalNomineePage.scss";

function FinalNomineePage({nominees}) {

    let height =  useWindowSize[0];
    let width =  useWindowSize[1];
    return (
        <main className="final-results">
            <Confetti
            className="final-results__confetti"
            width={width}
            height={height}
            colors={['#d6c770', '#d91832', '#294329']}
            />
            <div className="final-results__display">
            {nominees && nominees.map((nominee) => {
                let moviePoster;
                if(nominee.poster === "N/A") {
                    moviePoster = DefaultPoster
                }
                else {
                    moviePoster = nominee.poster
                }
                return (
                    <div className="final-results__display-card" key={nominee.key}>
                        <div className="final-results__display-card-items">
                            <img className="final-results__display-card-items-image" src={moviePoster}/>
                            <h3 className="final-results__display-card-items-title"> {nominee.title} </h3>
                        </div>
                    </div>
                        )
                    }
                )
            }å
            </div>
        </main>
    )
}

export default FinalNomineePage
