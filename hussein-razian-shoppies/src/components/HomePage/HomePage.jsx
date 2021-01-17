import React from 'react';
import {Link} from 'react-router-dom';
import Toby from '../../assets/images/toby-presenting.png';
import './homePage.scss';

function HomePage() {
    return (
        <main className="home-page">
            <div className="home-page__info">
                <h1 className="home-page__info-title">THE SHOPPIES</h1>
                <p className="home-page__info-desc">Search and Nominate 5 movies of your Choice</p>
                <Link to="/main-page"><button className="home-page__info-button">Click here to Nominate your Movies</button></Link>
            </div>
            <img className="home-page__image" src={Toby}/>
        </main>
    )
}

export default HomePage
