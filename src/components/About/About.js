import React from 'react';
import about1 from '../../images/about-1.png';

const About = () => {
    return (
        <div className="container">
            <h1 className="p-color d-flex justify-content-center align-items-center fw-bold my-5">About TourX</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={about1} alt="" />
                </div>
                <div className="col-md-6">
                    <h5 className="p-color">About ToreX</h5>
                    <h1>The Best Travel Agency Company.</h1>
                    <p>Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.</p>
                    <p></p>
                    <li className="p-color">ToreX The Best Choice For Your Travel</li>
                    <li className="p-color">ToreX Provide Best Offer For Your Travel</li>
                    <li className="p-color">ToreX A Popular Travel Agency</li>
                </div>
            </div>
        </div>
    );
};

export default About;