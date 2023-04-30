import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Login from '../Login/Login';

const Header = () => {
    const { user, logOut, modalShow, setModalShow } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {
            console.log('logged Out!');
        })
    }

    return (
        <div className='position-absolute w-100'>
            <Navbar className='bg-transparent' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='site-logo' src="/public/site logo.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#link" onClick={() => setModalShow(true)}>Login</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Book</Nav.Link>
                        </Nav>
                        {
                            user && <div className='d-flex'>
                                <h2 className='text-warning me-5 fw-bold'><span className='text-white fw-light'>Welcome, </span> {user.email}</h2>
                                <Button variant='danger' onClick={handleLogOut}>Log Out</Button>
                            </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={modalShow} onHide={() => setModalShow(false)}></Login>
        </div>
    );
};

export default Header;