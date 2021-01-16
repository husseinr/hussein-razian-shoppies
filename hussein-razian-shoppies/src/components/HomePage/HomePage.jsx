import React from 'react';
import {Link} from 'react-router-dom';
import './homePage.scss';

function HomePage() {
    return (
        <main className="home-page">
            <div className="home-page__items">
                <Link to="/main-page"><button className="home-page__items-button">Click Here to Select your Nominees</button></Link>
            </div>
        </main>
    )
}

export default HomePage
