import React from 'react';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    return (
        <div className="card ms-3" style={{ maxWidth: 200 }}>
            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ alter_ego }</h6>
                <img src={`../assets/heroes/${ id }.jpg`} alt="hero" className="card-img"/>
                <p className="card-text">the card's content.</p>

                {/* <a className="card-link">Card link</a> */}
                {/* <a href="#" className="card-link">Another link</a> */}
                
            </div>
        </div>
    )
}
