import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookingDetails = () => {
    const { userId } = useParams();
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${userId}`)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])

    return (
        <div className="my-5 container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={booking.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">{booking.name}.</h4>
                        <h6 className="card-title">$ {booking.price}</h6>
                        <p className="card-text">{booking.details}</p>
                        </div>
                        <div className="card-footer">
                        <small className="text-muted"></small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingDetails;