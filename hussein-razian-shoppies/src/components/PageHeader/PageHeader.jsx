import React from 'react';
import './pageHeader.scss';

function PageHeader({nomConfirm, searchingMovie}) {
    return (
        <nav className="nav">
            <h1 className="nav__header">The Shoppies</h1>
            <input className="nav__search" placeholder="Search a Movie" name="movie" autoComplete="off" onChange={(e) => searchingMovie(e.target.value)}/>
            {nomConfirm}
        </nav>
    )
}

export default PageHeader
