import React from 'react';
import './style.css';
import { Nav, Navbar } from 'react-bootstrap';

const Header = props => {
    return (
        <Navbar className="headerMenu"  expand="lg" >
            <div className="container">
                <Navbar.Brand href="#home">Leena's</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about-me">About Me</Nav.Link>
                        <Nav.Link href="contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="posts">Posts</Nav.Link>
                    </Nav>
                    <div >
                        Social Media icons
                    </div>
                </Navbar.Collapse>
                
            </div>
            
            
        </Navbar>
    );
}

export default Header;