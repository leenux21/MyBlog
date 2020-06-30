import React from 'react';
import './style.css';
import {Card,Container} from 'react-bootstrap';
import bio from './Bio.jpg';


const Bio = props => {
    return (
        <Container className="bioCont">
            <Card>
                <Card.Header>!FUN FACT! You dont need to remember this to know me actually.</Card.Header>
                
                <Card.Body>
                    <Card.Img className="image" src={bio} />
                    <Card.Title>When to wish and where to send gifts ?</Card.Title>
                    <Card.Text>
                        Born to a wonderful couple on 21.07.1997 and still living with them in kolkata.
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        
    );
}

export default Bio;