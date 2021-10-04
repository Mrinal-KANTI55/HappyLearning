import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Courses">Courses</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    ); 
};

export default Header;