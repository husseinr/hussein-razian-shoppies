import React from 'react';
import {Link} from 'react-router-dom';
import './pageHeader.scss';

function PageHeader({nomConfirm, searchingMovie, nomineeCount}) {

    return (
        <nav className="nav">
            <Link className="nav__link" to="/">
                <h1 className="nav__link-header">The Shoppies</h1>
            </Link>
            <div className="nav__items">
                <input className="nav__items-search" placeholder="Search a Movie" name="movie" autoComplete="off" onChange={(e) => searchingMovie(e.target.value)}/>
                    <h3 className="nav__items-count">Nominations: {nomineeCount}/5</h3>
            </div>
            {nomConfirm}
        </nav>
    )
}

export default PageHeader
