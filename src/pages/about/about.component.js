import React from 'react';
import './about.style.css';
import { MyAboutData } from "./about-data.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import { scroller } from "react-scroll";
import myPicture from "../../assets/arman3.jpg";

export const MyAbout = () => {
    return (
        <div id='about'>
            <div className='container'>
                <h1>About Me</h1>
                <div id='underlined'></div>
                <Container>
                    <Row>
                        <Col xs={12} md={4} className="about-columns-main">
                            <div>
                                <Row>
                                    <Image id='mypic' src={myPicture} roundedCircle />
                                </Row>
                                <Row id="socials-icon-row">
                                    <ul>
                                        <li>
                                            <a href={MyAboutData.socials[0].sLink}>
                                                <Image src={MyAboutData.socials[0].sSrc} alt={MyAboutData.socials[0].sAlt} className="socials-icon" rounded></Image>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={MyAboutData.socials[1].sLink}>
                                                <Image src={MyAboutData.socials[1].sSrc} alt={MyAboutData.socials[1].sAlt} className="socials-icon" rounded></Image>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={MyAboutData.socials[2].sLink}>
                                                <Image src={MyAboutData.socials[2].sSrc} alt={MyAboutData.socials[2].sAlt} className="socials-icon" rounded></Image>
                                            </a>
                                        </li>
                                    </ul>
                                </Row>
                            </div>

                        </Col>
                        <Col xs={12} md={4} className="about-columns-main">
                            <Row>
                                <p>
                                    <h3>Arman Golmakan</h3>
                                </p>
                            </Row>
                            <Row>
                                <p>Hi there! I'm Arman, a software developer based in Toronto. </p>
                                <p>I enjoy building softwares, websites, games, basically anything to do with coding. You can take a look at some of 
                                my projects <a href="#projects" onSelect={() => scroller.scrollTo('projects', {
                                        smooth: true,
                                        offset: -50,
                                        duration: 500,
                                    })}>here</a>.</p>

                            </Row>
                            <Row>

                            </Row>
                        </Col>
                        <Col xs={12} md={4} className="about-columns-main">
                            <p>
                                <h4>My personal interests</h4>
                            </p>
                            <p>
                                When I'm not coding my next project, I usually spend my time doing any of the following:
                            </p>
                            <p>
                                <ul>
                                    <li>
                                        I love <b>playing Tennis</b>;
                                    </li>
                                    <li>
                                        I am <b>learning to paint</b> (Oil, Watercolor pencil, Soft Pastels);
                                    </li>
                                    <li>
                                        I am watching one of my favorite <b>eSports</b> games;
                                    </li>
                                </ul>
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default MyAbout;