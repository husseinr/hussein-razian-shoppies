import React from 'react';
import './pageHeader.scss';

function PageHeader({nomConfirm}) {
    return (
        <nav className="nav">
            <h1 className="nav__header">The Shoppies</h1> 
            {nomConfirm}
        </nav>
    )
}

export default PageHeader
