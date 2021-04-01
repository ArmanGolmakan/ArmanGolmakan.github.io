import React from 'react';
import './experience.style.css';
import caseware from './../../assets/experience-icons/cw1.png';
import biosa from './../../assets/experience-icons/BioSA.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Tilt from 'react-tilt';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export const MyExperience = () => {
    return (
        <div id='experience'>
            <h1>Experience</h1>
            <div id='underlined'></div>
            <Jumbotron>
                <Container>
                    <Tilt options={{ max: 10 }}>
                        <Card>
                            <Card.Header>
                                <Card.Img variant="top" src={caseware} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Software Developer Co-op</Card.Title>
                                <Card.Text>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3>Full Stack Developer</h3>
                                        <div><b>Technology:</b> Angular, Java, JavaScript, TypeScript</div>
                                        <div><b>Duration:</b> January 2019 - September 2019</div>
                                        <div><b>Description</b></div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li><b>Developed & enhanced</b> auditing web applications using
                                             Angular framework and managed unexpected behavior of implemented functionality by writing tests.</li>
                                            <li><b>Communicated</b> directly with squad members and product owners to accurately determine requirements.</li>
                                            <li>Gained experience with <b>Typescript, Java, Node.js, Angular</b> and
                                             <b> Jasmine testing framework</b>.</li>
                                            <li>Practiced <b>Agile</b> in 2 week sprints with 20 other developers</li>
                                        </ul>
                                    </div>
                                    <div className="buttonHolder">
                                        <Button href="https://www.caseware.com/us">Company Website</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>

            <Jumbotron>
                <Container>
                    <Tilt options={{ max: 10 }}>
                        <Card>
                            <Card.Header>
                                <Card.Img variant="top" src={biosa} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Undergraduate Researcher</Card.Title>
                                <Card.Text>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3>Web App Developer</h3>
                                        <div><b>Technology:</b> HTML, CSS, JavaScript</div>
                                        <div><b>Duration:</b> 2017-2019</div>
                                        <div><b>Description</b></div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li><b>Researched</b> <b>computer vision</b> and various detection and monitoring
                                            applications for AMD (Age Related Macular Degeneration)</li>
                                            <li><b>Designed & Developed</b> web applications using HTML/CSS/JavaScript </li>
                                        </ul>
                                        <div className="buttonHolder">
                                            <Button href="http://www.lassondeundergraduateresearch.com/new-page-4ftde">Project details</Button>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default MyExperience;