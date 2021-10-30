import React, { useEffect, useState } from 'react';
import TravellerCard from './TravellerCard';
import './TravellerSay.css';

const TravellerSay = () => {
    const [travellers, setTravelers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/travellers')
        .then(res => res.json())
        .then(data => setTravelers(data))

    },[])
    return (
        <div className="container traveller">
            <h4 className="p-color d-flex justify-content-center align-items-center fw-bold ">Our Traveller Say</h4>
            <h1 className="d-flex justify-content-center align-items-center fw-bold mb-5">What Oue Traveller Say About Us</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                travellers.map(traveller => <TravellerCard
                    key={traveller.kye}      
                     traveller={traveller}
                     ></TravellerCard>)
            }
        </div>
        </div>
    );
};

export default TravellerSay;