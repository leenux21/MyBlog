import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';



class NavBar extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Me</Nav.Link>
                        <Nav.Link href="#link">Contact Me</Nav.Link>
                        
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBar ;