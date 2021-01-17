import React from 'react';
import {Link} from 'react-router-dom';
import Tobi from '../../assets/images/tobi-presenting.png';
import './homePage.scss';

function HomePage() {
    return (
        <main className="home-page">
            <div className="home-page__info">
                <h1 className="home-page__info-title">THE SHOPPIES</h1>
                <Link to="/main-page"><button className="home-page__info-button">Click Here to Nominate 5 Movies</button></Link>
            </div>
            <img className="home-page__image" src={Tobi} alt="Shopify CEO Presenting Page Intro"/>
        </main>
    )
}

export default HomePage
