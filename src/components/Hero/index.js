import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import './style.css';


const Hero = props => {
    return (
      
        <Jumbotron fluid className="hero">
                <Container >
                    <p className="para">
                        Welcome to a messy girls world.....
                    </p>
                </Container>
            </Jumbotron>
     
        
    );
}

export default Hero;
