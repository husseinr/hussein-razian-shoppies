import React from 'react';
import './pageHeader.scss';

function PageHeader({nomConfirm, searchingMovie, nomineeCount}) {

    return (
        <nav className="nav">
            <h1 className="nav__header">The Shoppies</h1>
            <input className="nav__search" placeholder="Search a Movie" name="movie" autoComplete="off" onChange={(e) => searchingMovie(e.target.value)}/>
            <div className="nav__nominee-count">
                <h3 className="nav__nominee-count-value">Nominations: {nomineeCount}/5</h3>
            </div>
            {nomConfirm}
        </nav>
    )
}

export default PageHeader
