import React from 'react';
import './style.css';
import { Card, Container } from 'react-bootstrap';



const Education = props => {
    return (
        <Container className="bioCont">
            <Card>
                <Card.Header>!FUN FACT! You dont need to remember this to know me actually.</Card.Header>

                <Card.Body>
                   
                    <Card.Title>Education</Card.Title>
                    <Card.Text>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem veniam repudiandae quis magni, laudantium officia repellendus harum, dignissimos earum fuga enim, animi modi vitae voluptas necessitatibus laboriosam similique nemo aliquid facere quia vero expedita consectetur odio. Provident, eius pariatur. Voluptatum architecto iusto laborum eligendi possimus earum dolorem quaerat quo!
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default Education;