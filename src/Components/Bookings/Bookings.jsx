import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Bookings = () => {
    return (
        <div className='mb-5 container'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <Card className='border-0 shadow-lg'>
                        <Card.Header className='d-flex align-items-center bg-white border-0 mb-0'>
                            <h4 className='bg-warning rounded-circle px-3 py-2 me-3'>S</h4>
                            <h4>Standard Single Room</h4>
                        </Card.Header>
                        <Card.Body>
                            <CardImg src='/public/hero background.jpg' />
                            <Card.Text className='mt-4'>
                                Standard single rooms are designed in open-concept living area and have many facilities.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-white">
                        <Link to='/checkout' className='text-white text-decoration-none'><Button variant="primary">BOOK</Button></Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div className="col">
                    <Card className='border-0 shadow-lg'>
                        <Card.Header className='d-flex align-items-center bg-white border-0 mb-0'>
                            <h4 className='bg-warning rounded-circle px-3 py-2 me-3'>S</h4>
                            <h4>Standard Single Room</h4>
                        </Card.Header>
                        <Card.Body>
                            <CardImg src='/public/hero background.jpg' />
                            <Card.Text className='mt-4'>
                                Standard single rooms are designed in open-concept living area and have many facilities.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-white">
                            <Link to='/checkout' className='text-white text-decoration-none'><Button variant="primary">BOOK</Button></Link>
                        </Card.Footer>
                    </Card>
                </div>

                <div className="col">
                    <Card className='border-0 shadow-lg'>
                        <Card.Header className='d-flex align-items-center bg-white border-0 mb-0'>
                            <h4 className='bg-warning rounded-circle px-3 py-2 me-3'>S</h4>
                            <h4>Standard Single Room</h4>
                        </Card.Header>
                        <Card.Body>
                            <CardImg src='/public/hero background.jpg' />
                            <Card.Text className='mt-4'>
                                Standard single rooms are designed in open-concept living area and have many facilities.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="border-0 bg-white">
                            <Link to='/checkout' className='text-white text-decoration-none'><Button variant="primary">BOOK</Button></Link>
                        </Card.Footer>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Bookings;