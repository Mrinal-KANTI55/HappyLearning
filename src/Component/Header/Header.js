import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
                <Container>
                <Link className="navbar-brand me-5 fs-3" to="#">Happy Learning</Link>    
                    <Nav className="me-auto">
                        <Link className='text-light text-decoration-none me-3' to="/home">Home</Link>
                        <Link className='text-light text-decoration-none me-3' to="/courses">Courses</Link>
                        <Link className='text-light text-decoration-none me-3' to="/about">About</Link>
                        <Link className='text-light text-decoration-none me-3' to="/help">Help</Link>
                    </Nav>
                </Container>
            </Navbar>  
        </div>
    ); 
};

export default Header;