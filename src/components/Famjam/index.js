import React from 'react';
import './style.css';
import { Card, Container } from 'react-bootstrap';



const Famjam = props => {
    return (
        <Container className="BioCont">
            <Card>
                <Card.Header>!FUN FACT! You dont need to remember this to know me actually.</Card.Header>

                <Card.Body>
                    
                    <Card.Title>Family & Friends</Card.Title>
                    <Card.Text>
                        lorem 20
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default Famjam;