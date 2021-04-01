import React from 'react';
import './contact.style.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import Button from 'react-bootstrap/Button';


const MyContact = () => {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <div id='underlined'></div>
            <Jumbotron>
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                        <a href="mailto:arman.golmakan@gmail.com" target="_blank">
                            <Button variant="outline-danger" title="arman.golmakan@gmail.com">Email</Button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.linkedin.com/in/arman1996/" target="_blank">
                            <Button variant="outline-danger" title="https://www.linkedin.com/in/arman1996/">Linkedin</Button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://github.com/ArmanGolmakan" target="_blank">
                            <Button variant="outline-danger" title="https://github.com/ArmanGolmakan">Github</Button>
                        </a>
                    </div>
                    </Col>
                </Row>
            </Jumbotron>
            
        </div>
    );
};

export default MyContact;