import React from 'react';
import {Container,Row,Col,} from 'react-bootstrap';
import './style.css';



const Footer = props => {
    return (
        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col className="footer-para">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Footer Content
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                            error amet numquam iure provident voluptate esse quasi,
                        veritatis totam voluptas nostrum.{" "}
                        </p>
                    </Col>
                   

                    {/*<Col>
                    <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                    <ul className="list-unstyled">
                        <p>
                            <a href="#!">PROJECTS</a>
                        </p>
                        <p>
                            <a href="#!">ABOUT US</a>
                        </p>
                        <p>
                            <a href="#!">POSTS</a>
                        </p>
                        
                    </ul>
                </Col>*/}
                    <hr className="clearfix w-100 d-md-none" />
                    <Col className="footer-para">
                        <h5 className="text-uppercase mb-3 font-weight-bold">Address</h5>
                        <p>
                            <i className="fa fa-home mr-3" /> Batanagar,Kolkata-700139,India.
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> debleenab0099@gmail.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> + 91 9330 730 470
                        </p>

                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col className="footer-para">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Follow Me
                    </h5>
                        <div className="mt-2 icons">
                            <ul className="list-unstyled">
                                <li>
                                    <a className="fb-ic" href="https://www.facebook.com/profile.php?id=100009870660164">
                                        <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x" />
                                    </a>
                                </li>

                                <li>
                                    <a className="ins-ic" href="https://www.instagram.com/leen.ux/">
                                        <i className="fab fa-instagram fa-lg  mr-md-5 mr-3 fa-2x" />
                                    </a>
                                </li>

                                <li>
                                    <a className="li-ic" href="https://www.linkedin.com/in/debleena-biswas-8340a0193">
                                        <i className="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-2x" />
                                    </a>
                                </li>

                            </ul>


                        </div>

                    </Col>
                </Row>
            </Container>
            
            <div className="footer-copyright text-center py-3 footer-copy">
                <Container fluid footer-copy>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="Home"> abc.com </a>
                </Container>
            </div>
        </Container>
    );
}

export default Footer;