import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
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
                            <Nav.Link className='text-white' href="#link">Login</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Book</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;