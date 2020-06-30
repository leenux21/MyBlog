import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';



const Posts = props => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <BlogPost/>
                </Col>
                <Col sm={4}>
                    <SideBar/>
                </Col>
            </Row>
        </Container>
    );
}

export default Posts;