import React from 'react';
import './projects.style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import Button from 'react-bootstrap/Button';
import mario from './../../assets/project-icons/mario.png';
import medscan from './../../assets/project-icons/medscan.png';
import amd from './../../assets/project-icons/amd.png';
import weather from './../../assets/project-icons/weather.png';

const MyProjects = () => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div id='underlined'></div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header>
                                <b>Java Mario Game</b>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Image src={mario} />
                                    <div>
                                        <Button>Project Source Code</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header>
                                <b>Medscan</b>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Image src={medscan} />
                                    <div>
                                        <Button href="https://github.com/ArmanGolmakan/HackTheNorth2019">Project Source Code</Button>
                                    </div>
                                    <div>
                                        <Button href="https://devpost.com/software/medscan">Project Details</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header>
                                <b>AMD (Age Related Macular Degeneration) Detection</b>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Image src={amd} />
                                    <div>
                                        <Button href="https://github.com/ArmanGolmakan/Age-Related-Macular-Degeneration-Detection">Project Source Code</Button>
                                    </div>
                                    <div>
                                        <Button href="http://www.lassondeundergraduateresearch.com/new-page-4ftde">Project Details</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header>
                                <b>Weather Reporter</b>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Image src={weather} />
                                    <div>
                                        <Button href="https://github.com/ArmanGolmakan/Weather-Reporter-React">Project Source Code</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default MyProjects;