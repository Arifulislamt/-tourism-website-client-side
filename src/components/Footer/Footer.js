import React from 'react';
import './Footer.css';
import logo from '../../images/logo-2.png';
import cord1 from '../../images/payment-card-1.png';
import cord2 from '../../images/payment-card-2.png';
import cord3 from '../../images/payment-card-3.png';
import cord4 from '../../images/payment-card-4.png';
import cord5 from '../../images/payment-card-5.png';

const Footer = () => {
    return (
        <div className="back-color">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 text-white">
                        <img className="mb-3" src={logo} alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
                        <h4>Follow Us: </h4>
                        <i className="fab fa-facebook-square fa-2x icon-color"> </i>
                        <i className="fab fa-twitter-square fa-2x mx-2 icon-color"></i>
                        <i className="fab fa-instagram-square fa-2x icon-color"></i>
                        <i className="fab fa-linkedin fa-2x mx-2 icon-color"></i>

                    </div>
                    <div className="col-md-3 text-white">
                    <h4 className="mb-4">contact Us</h4>
                    <p><i className="fas fa-phone-alt icon-color me-2"></i>+01811-1222222</p>
                    <p> <i className="fas fa-envelope-open-text icon-color me-1"></i>info@example.com</p>
                    <p> <i className="fas fa-map-marker-alt icon-color"></i> 2752 Willison Street Eagan, United State</p>
                    </div>
                    <div className="col-md-3 text-white">
                    <h4 className="mb-4">Support</h4>
                    <p >Contact Us</p>
                    <p > About Us</p>
                    <p > Services</p>
                    <p > Our Blogs</p>
                    </div>
                    <div className="col-md-3 text-white">
                    <h4 className="mb-4">We Accepts:</h4>
                    <img className="m-1" src={cord1} alt="" />
                    <img className="m-1" src={cord2} alt="" />
                    <img className="m-1" src={cord3} alt="" />
                    <img className="m-1" src={cord4}alt="" />
                    <img className="m-1" src={cord5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;