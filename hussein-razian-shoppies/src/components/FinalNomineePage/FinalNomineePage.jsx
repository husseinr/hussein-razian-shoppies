import React from 'react';
import {Link} from 'react-router-dom';
import useWindowSize from '../../Hooks/Hooks';
import Confetti from 'react-confetti';
import {LinkedinShareButton, TwitterShareButton, FacebookShareButton, FacebookIcon, LinkedinIcon, TwitterIcon} from "react-share";
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
            colors={['#d6c770', '#d91832', '#294329']}/>
            <Link className="final-results__link" to ="/">
                <h1 className="final-results__link-header">The Shoppies</h1>
            </Link>
            <p className="final-results__message">Thank you - Your Nominations are Submitted!</p>
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
                }
            </div>
            <div className="final-results__share">
                <FacebookShareButton url={'http://www.husseinrazian.com'} title={`I just submitted my nominees for this year's shoppies awards and so should you!`} hashtag={"Shopify2021Internship"}>
                    <FacebookIcon size={32} round={true}  />
                </FacebookShareButton>
                <LinkedinShareButton title={'The Shoppies - Vote Now for you Favourite Movies!'} url={'http://www.husseinrazian.com'}  summary={`I just voted for ${nominees.map(nominee => nominee.title)}`}>
                    <LinkedinIcon size={32} round={true}  />
                </LinkedinShareButton>
                <TwitterShareButton url={'http://www.husseinrazian.com'} title={`I just submitted my nominees for this year's #ShoppiesAwards and so should you!`} hashtags={[nominees.map(nominee => nominee.title.replace(/ /g,'')),"Shopify2021Internship"]}>
                    <TwitterIcon size={32} round={true}  />
                </TwitterShareButton>
            </div>
        </main>
    )
}

export default FinalNomineePage
