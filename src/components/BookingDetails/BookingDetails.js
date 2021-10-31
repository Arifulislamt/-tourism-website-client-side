import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './BookingDetails.css';


const BookingDetails = () => {
    const {user} = useAuth()
    const { userId } = useParams();
    const [booking, setBooking] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();

    //single data lod
    useEffect(() => {
        fetch(`https://shrouded-reef-39821.herokuapp.com/packages/${userId}`)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])


    const onSubmit = data => {
        fetch("https://shrouded-reef-39821.herokuapp.com/booking",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result));
        console.log(data);
    };

    return (
        <div className="my-5 container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row row-cols-1 row-cols-md-1 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={booking.img} className="card-img-top" alt="..." />
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

                {/* form section  */}

                <div className="col-md-6">
                    <div>
                        <h3 className="mt-5 text-center p-color">
                            Please Book Now
                        </h3>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <div className="package-box border border d-flex justify-content-center align-items-center">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            {...register("name")}
                                            placeholder="Name"
                                            defaultValue={user?.displayName}
                                            className="px-4 py-2 mx-2"
                                        />
                                        <br />

                                        <input
                                            {...register("email", { required: true })}
                                            placeholder="Email"
                                            defaultValue={user?.email}
                                            className="px-4 py-2 m-2"
                                        />
                                            <br />
                                        <input
                                            {...register("books")}
                                            // placeholder="Booking Place"
                                            defaultValue={booking.name}
                                            className="px-4 py-2 m-2"
                                        />
                                        <br />
                                        <input
                                            {...register("date", { required: true })}
                                            placeholder="date"
                                            defaultValue={new Date()}
                                            className="px-4 py-2 m-2"
                                        />
                                        <br />
                                        <input
                                            {...register("description", { required: true })}
                                            placeholder="Description"
                                            className="px-4 py-2 m-2"
                                        />
                                    
                                        <br />
                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" className="btn btn-success w-50 ms-2 fw-bold" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;