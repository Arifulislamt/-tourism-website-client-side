import React from 'react';

const TravellerCard = (props) => {
    const {name, images, details} = props.traveller;
    return (
        <div>
             <div className="col">
                <div className="card h-100">
                    <img src={images} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
                </div>
        </div>
    );
};

export default TravellerCard;