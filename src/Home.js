import './App.css';
import React, { Component } from 'react';
import { Image, Badge, Accordion, Card, Tabs, Tab } from 'react-bootstrap';

export default class Home extends Component {
    render(){
        return (
            <div>
                <Image src="howardRoark.jpg" fluid />
                <div>
                    <h1>The Fountainhead - Ayn Rynd</h1>         
                    <h4>Read February 13th - March 21st</h4>           
                </div>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" default title="Summary">
                        <p> The Fountainhead is a constant struggle between creators and the second-handers.</p>
                        <p> A struggle between the urge to control other's emotions and Roark's facinating ability to live his life through his own means.</p>
                        <p>

                        </p>
                    </Tab>
                    <Tab eventKey="profile" title="Notable Characters">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Howard Roark
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Easily my favorite character in the book. Can do any job, but will literally go hungry to do what he has always dreamed of doing.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Dominique Francon
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>She's weird, but dudes dig it</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Elmsworth Toohey
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>I'd RKO him at first site</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Gail Wynand
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>The embodiment of all politicians. Believing one thing and acting against it for gaining money and power.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    Peter Keating
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>Fuck boi if I've ever read one</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="contact" title="Question's left Unanswered">
                        <ul>
                            <li>What in the hell was Roark thinking when he raped Dominque?!</li>
                            <li>Why on Earth did Dominique have to be present at the explosion?!</li>
                            <li>Wonder if Peter will ever get his comeback story...</li>
                        </ul>
                    </Tab>
                </Tabs>

            </div>
        );
    }
}