import React from 'react';
import './carousel.style.css';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import cityBg from "../../assets/city-gradient1.jpg";
import armanBg from "../../assets/arman1bw.jpg";

const MyCarousel = () => {
    return (
        <div className='paral'>
            <Parallax bgImage={ cityBg } strength={500}>
                <div className='backgroundImage'>
                    <div id='containerDiv'>
                        <Container>
                            <Row>
                                <Col className='portraitDiv' xs={12} md={12}>
                                    <Image className='armanBg' src={armanBg} roundedCircle   />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <h3>Arman Golmakan</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <h5>Software Developer</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                
            </Parallax>


            {/* <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="crousel-bg"
                        src={bergeron}
                        alt="berg"
                    /> 
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default MyCarousel;