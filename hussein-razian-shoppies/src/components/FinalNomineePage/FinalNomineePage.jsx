import React from 'react';
import NomineeCards from '../NomineeCards/NomineeCards';

function FinalNomineePage({nominees}) {
    return (
        <div>
            <p>Heyy</p>
                {nominees && nominees.map((nominee, index) => {
                return (
                    <div className="nom-card" key={nominee.key}>
                    <div className="nom-card__value">
                        <h2 className="nom-card__value-index">Test</h2>
                    </div>
                    <div className="nom-card__content">
                        <img className="nom-card__content-image" src={nominee.src}/>
                        <div className="nom-card__content-items">
                            <h3 className="nom-card__content-items-title"> {nominee.title} </h3>
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>
    )
}

export default FinalNomineePage
