import React from 'react';
import './skills.style.css';
import {MySkillsData} from "./skills-data.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";

const MySkills = () => {
    return (
        <div className="skills">
            <h1>Tech Skills</h1>
            <div id='underlined'></div>
            <CardDeck>
                <Row className="card-row">
                    <Col md={4}>
                        <Card className="card-zoom-in card">
                            <Card.Body>
                                <Card.Title>Frontend</Card.Title>
                                <hr />
                                <Card.Text className="card-text">
                                    {
                                        MySkillsData.frontend.map((skill, index) => (
                                            <span key={index} className="card-span">
                                                <a href={skill.sLink} className="card-a">
                                                    <Image src={skill.sSrc} alt={skill.sAlt} className="card-image" rounded></Image> {skill.sName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-zoom-in card">
                            <Card.Body>
                                <Card.Title>Backend</Card.Title>
                                <hr />
                                <Card.Text className="card-text">
                                    {
                                        MySkillsData.backend.map((skill, index) => (
                                            <span key={index} className="card-span">
                                                <a href={skill.sLink} className="card-a">
                                                    <Image src={skill.sSrc} alt={skill.sAlt} className="card-image" rounded></Image> {skill.sName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-zoom-in card">
                            <Card.Body>
                                <Card.Title>Hosting Platforms</Card.Title>
                                <hr />
                                <Card.Text className="card-text">
                                    {
                                        MySkillsData.hosting.map((skill, index) => (
                                            <span key={index} className="card-span">
                                                <a href={skill.sLink} className="card-a">
                                                    <Image src={skill.sSrc} alt={skill.sAlt} className="card-image" rounded></Image> {skill.sName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-zoom-in card">
                            <Card.Body>
                                <Card.Title>Programming Languages</Card.Title>
                                <hr />
                                <Card.Text className="card-text">
                                    {
                                        MySkillsData.languages.map((skill, index) => (
                                            <span key={index} className="card-span">
                                                <a href={skill.sLink} className="card-a">
                                                    <Image src={skill.sSrc} alt={skill.sAlt} className="card-image" rounded></Image> {skill.sName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-zoom-in card">
                            <Card.Body>
                                <Card.Title>Database</Card.Title>
                                <hr />
                                <Card.Text className="card-text">
                                    {
                                        MySkillsData.database.map((skill, index) => (
                                            <span key={index} className="card-span">
                                                <a href={skill.sLink} className="card-a">
                                                    <Image src={skill.sSrc} alt={skill.sAlt} className="card-image" rounded></Image> {skill.sName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-zoom-in card">
                            <Card.Body>
                                <Card.Title>Version Control</Card.Title>
                                <hr />
                                <Card.Text className="card-text">
                                    {
                                        MySkillsData.versioncontrol.map((skill, index) => (
                                            <span key={index} className="card-span">
                                                <a href={skill.sLink} className="card-a">
                                                    <Image src={skill.sSrc} alt={skill.sAlt} className="card-image" rounded></Image> {skill.sName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
        </div>
    );
};

export default MySkills;