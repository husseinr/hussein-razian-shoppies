import React from 'react';
import NomineeCards from '../NomineeCards/NomineeCards';
import "./finalNomineePage.scss";

function FinalNomineePage({nominees}) {
    return (
        <main className="final-results">
            <div className="final-results__display">
            {nominees && nominees.map((nominee, index) => {
                        return (
                            <div className="final-results__display-card" key={nominee.key}>
                                <div className="final-results__display-card-items">
                                    <img className="final-results__display-card-items-image" src={nominee.poster}/>
                                    <h3 className="final-results__display-card-items-title"> {nominee.title} </h3>
                                </div>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </main>
    )
}

export default FinalNomineePage
