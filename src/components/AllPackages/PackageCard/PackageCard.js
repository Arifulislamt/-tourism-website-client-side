import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = (props) => {
    const { _id,name, price, img, details} = props.pk;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><i className="fas fa-map-marker-alt icon-color"></i> {name}</h5>
                    <h6 className="card-title">$ {price}/ <small>Per Person</small></h6>
                    <p className="card-text">{details}</p>
                    </div>
                    <div className="card-footer">
                   <Link to={`/booking/${_id}`}>
                   <button className="btn btn-success"> Booking Now</button>
                   </Link>
                    </div>
                </div>
                </div>
            </div>
            );
};

            export default PackageCard;