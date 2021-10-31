
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">
                        <img src={logo} className="d-inline-block align-top" alt="" />
                    </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/booking">Booking</Nav.Link>
                       {user?.email &&
                            <Nav.Link className="fw-bold text-dark" as={Link} to="/myOrders">MyOrders</Nav.Link>
                       }
                       {user?.email &&
                            <Nav.Link className="fw-bold text-dark" as={Link} to="/AllOrders">AllOrders</Nav.Link>
                       }
                       {user?.email ?
                        <Button onClick={logOut}variant="dark" >LogOut</Button>
                        :
                        <Nav.Link className="fw-bold text-dark" as={Link} to="/login">Login</Nav.Link>
                       }
                            <Navbar.Text>
                                <span className="text-dark fw-bold">Signed in as: </span> <a href="#login" className="name">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;